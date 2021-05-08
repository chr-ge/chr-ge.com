import type { NextApiRequest, NextApiResponse } from 'next'
import * as nodemailer from 'nodemailer'
import { google } from 'googleapis'
import { isEmail, emailText, emailTemplate } from 'utils/email'

const OAuth2 = google.auth.OAuth2

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    process.env.GMAIL_REDIRECT_URL
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  })

  const accessToken: string = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject('Failed to create access token.')
      }
      if (token) resolve(token)
    })
  })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USER,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken,
    },
  })

  return transporter
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, message } = req.body
  const userAgent = req.headers['user-agent'] ?? ''

  if (!email || !isEmail(email) || !message) {
    return res
      .status(400)
      .json({ success: false, message: 'Malformed content' })
  }

  const mailData = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `CHR-GE // Message from ${email}`,
    text: emailText(email, message, userAgent),
    html: emailTemplate(email, message, userAgent),
  }

  const emailTransporter = await createTransporter()

  emailTransporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err)
    console.log(info)
  })

  res.status(200).json({ success: true })
}
