require('dotenv').config();
const sendSystemEmail = require('../utilities/mailer');
const _ = require('lodash');

module.exports = {
    post: {
        sendSystemEmail: async (req, res) => {
            try {
                await sendSystemEmail(req.systemEmailDetail);
                await sendSystemEmail(req.adminEmail);
                res.status(200).send({
                    msg: 'You should receive an email',
                });
            } catch (error) {
                res.status(417).send(error);
            }
        },
        sendEmailBlast: async (req, res) => {
            const { subject, message, emailList, subMessage } = req.body;
            const successList = [];

            for (let contact of emailList) {

                const emailBlastInfo = {
                    msg: message,
                    subject,
                    // linkText: 'Verify email',
                    instructionMsg: subMessage,
                    email: contact.email,
                    firstname: contact.firstname,
                    // linkURL: 'shalomministrymovin4ward.org',
                }

                try {
                    await sendSystemEmail(emailBlastInfo);
                } catch (error) {
                    return res.status(417).send(error);
                }
            }

            for (let contact of emailList) {
                successList.push(_.omit(contact, ['__v', '_id']));
            }

            const emailBlastConfirmation = {
                msg: 'Emails Sent.',
                subject: 'Email Blast Success',
                linkText: 'Email Blast',
                instructionMsg: 'Back to your email blast',
                email: 'cybre7@gmail.com',
                firstname: 'Maya',
                linkURL: 'shalomministrymovin4ward.org/emailsend',
                moreInfo: successList
            }

            try {
                await sendSystemEmail(emailBlastConfirmation);
            } catch (error) {
                return res.status(417).send(error);
            }

            res.status(200).send({
                msg: 'emails sents',
                data: emailList
            });
        }
    }
}