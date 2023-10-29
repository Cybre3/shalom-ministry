const sendSystemEmail = require('../utilities/mailer');

module.exports = {
    post: {
        sendSystemEmail: async (req, res) => {
            try {
                await sendSystemEmail(req.systemEmailDetail);
                res.status(200).send({
                    msg: 'You should receive an email',
                });
            } catch (error) {
                res.status(417).send(error);
            }
        }
    }
}