# No-Balls-Podcast-Finder
Checks the BBC TMS RSS feed for No Balls episodes &amp; sends an email if one was released today

## Email Set up

The app uses [SendGrid](https://sendgrid.com) to send emails. Set up details can be found on their website after creating an account. Once you have a verified single sender, update the .env example to include this email address & an API key.

Note emails sent through SendGrid are likely to go to Spam!
