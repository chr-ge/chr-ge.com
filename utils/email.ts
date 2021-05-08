export const isEmail = (email: string) => {
  const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return email.match(emailRegEx)
}

export const emailText = (email: string, message: string, userAgent: string) =>
  `New message sent from: ${email} | ${message} | Sent on: ${new Date().toString()} | User Agent: ${userAgent}`

export const emailTemplate = (
  email: string,
  message: string,
  userAgent: string
) => {
  return `
    <div 
      style="background: #1A202C; display: flex; align-items: center; justify-content: center; padding: 2rem; flex-direction: column; box-sizing: border-box;"
    >
      <p style="color: #EDF2F7; font-size: 1.25em">
        New message from: <span style="font-weight: 700">${email}</span>
      </p>
      <p style="color: #EDF2F7; text-align: center">
        ${new Date().toString()}<br />${userAgent}  
      </p>
      <hr style="margin: 1rem 0; color: white; width: 100%" />
      <p style="color: white; border: 1px solid #805AD5; padding: 1rem; width: 100%">
        ${message}
      </p>
    </div>
  `
}
