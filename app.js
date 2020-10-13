require('dotenv').config()
const nodemailer = require('nodemailer')
const { SMTP_HOST, SMTP_PORT, SMTP_SERVICE, EMAIL_ID, EMAIL_PASSWORD, RECEIVER_EMAIL_ID } = process.env

const transport = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  service: SMTP_SERVICE,
  secure: false,
  auth: {
    user: EMAIL_ID,
    pass: EMAIL_PASSWORD
  },
  debug: false,
  logger: true
})

const message = {
  from: `"From: Shashikanth P" <${EMAIL_ID}>`,
  to: RECEIVER_EMAIL_ID,
  subject: 'Subject of the mail',
  text: 'Message body',
  html: '<p style="font-family:sans-serif;"><span style="color:red;">HTML</span><em>can also be used to send messages</em></p>'
}

transport.sendMail(message, function(err, info) {
  if (err) {
    console.log('Error: ')
    console.log(err)
  } else {
    console.log('Success: ')
    console.log(info);
  }
})