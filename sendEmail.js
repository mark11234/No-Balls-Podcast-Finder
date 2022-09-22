const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
dotenv.config();

module.exports.sendNoBallsEmail = (title, content) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? 'api_key_missing');

  const message = {
        to: process.env.RECIEVER_EMAIL_ADDRESS,
        from: process.env.SENDER_EMAIL_ADDRESS,
        subject: `${title}`,
        text: `A new No Balls episode is now available`,
        html: `<p>New <a href="https://podcasts.apple.com/gb/podcast/test-match-special/id205892240">No Balls: The Cricket Podcast</a>
               episode now available!</p>
               <p>${content}</p>`
  };

  sgMail.send(message)
  .catch((error) => {
    console.error(error)
    console.log(error.response.body)
  })
};
