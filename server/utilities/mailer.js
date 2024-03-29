require('dotenv').config();
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

async function sendSystemEmail(data) {

    let config = {
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASS
        }
    }

    let transporter = nodemailer.createTransport(config);

    let Mailgenerator = new Mailgen({
        theme: 'cerberus',
        product: {
            name: 'Shalom Ministry',
            link: 'https://www.shalomministrymovin4ward.org'
        }
    });

    let response = {
        body: {
            greeting: 'Hello',
            name: data.firstname,
            intro: data.msg,
            action: {
                instructions: data.instructionMsg,
                button: {
                    color: '#22BC66',
                    text: data.linkText,
                    link: data.linkURL,
                    // logo: data.logo
                }
            },
            outro: 'Need help, or have questions? Just reply to this email. We would love to help',
            signature: `The Spirit of the Lord God is upon me; because the Lord hath anointed me to preach good
            tidings unto the meek; he hath sent me to bind up the brokenhearted, to proclaim liberty
            to the captives, and the opening of the prison to them that are bound; <br />
            Isaiah 61:1 KJV <br />`
        }
    }

    let systemEmail = Mailgenerator.generate(response);

    let message = {
        from: process.env.GMAIL_EMAIL,
        to: data.email,
        subject: data.subject,
        html: systemEmail
    }
    
    try {
        return await transporter.sendMail(message);
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendSystemEmail;