import type { NextApiRequest, NextApiResponse } from 'next'
import * as nodemailer from 'nodemailer'
import { isEmail, emailText, emailTemplate } from 'utils/email'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, message } = req.body
  const userAgent = req.headers['user-agent'] ?? ''

  if (!email || !isEmail(email) || !message) {
    return res
      .status(400)
      .json({ success: false, message: 'Malformed content' })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailData = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `CHR-GE // Message from ${email}`,
    text: emailText(email, message, userAgent),
    html: emailTemplate(email, message, userAgent),
  }

  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err)
    console.log(info)
  })

  res.status(200).json({ success: true })
}
