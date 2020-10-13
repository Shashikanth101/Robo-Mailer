# Robo-Mailer
Send Email with NodeJS using Yahoo Mail as the smtp service

## Installation
Make sure you have node.js and npm already installed and clone this repository.
Enter the below command to install dependencies
```bash
npm install
```

## Setup
- create a yahoo mail account
- navigate to Account info > Account Security
- scroll down and click 'Generate app password' and select 'Other' from the dropdown menu
- give it a name and click on generate
- use this as the password in your nodejs app instead of original password

## Usage
- create a new .env file in the root of the project directory
- Enter all your credentials as shown below
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=465
SMTP_SERVICE=yahoo
EMAIL_ID=your_yahoo_email_id
EMAIL_PASSWORD=generated_password
RECEIVER_EMAIL_ID=recepient_mail_id
```
To run the application, enter the below command in your terminal
```bash
npm start
```

### Some usefull resources that helped me along the way
- Simple explaination: [Chunkbytes Blog](https://chunkbytes.com/2019/01/send-emails-with-nodemailer/)
- Extensive explaination: [Mailtrap blog](https://blog.mailtrap.io/sending-emails-with-nodemailer/)
- Nodemailer setup with Yahoo: [A stackoverflow answer](https://stackoverflow.com/questions/47928887/nodemailer-yahoo-incorrect-login)

### Note:
Cannot send both text and HTML together