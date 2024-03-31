const { Email } = require('../models/emailModel');


module.exports = {
  get: {
    allEmails: async (req, res) => {
      const emails = await Email.find({});

      res.status(200).send(emails);
    },
  },

  post: {
    addNewEmail: async (req, res) => {
      const { email } = req.body;

      let currentEmail = await Email.findOne({ email });
      if (currentEmail) return res.status(400).send(`email: ${email} already added.`);

      req.body.email = req.body.email.toLowerCase();
      currentEmail = new Email(req.body);

      await currentEmail.save();

      res.send(email);
    },

    sendEmailBlast: async (req, res, next) => {
  
      //   const systemEmailDetail = {
      //     msg: "Thank you for registering to Shalom Ministry!",
      //     subject: 'Verify Email',
      //     linkText: 'Verify email',
      //     instructionMsg: 'Please verify your email',
      //     email,
      //     firstname,
      //     linkURL: 'shalomministrymovin4ward.org',
      //     // logo: base64img
      //   }

      //   const adminEmail = {
      //     msg: emailList,
      //     subject: 'Emails Sent',
      //     instructionMsg: 'Emails that were sent:',
      //     email: 'shalom9ministry@gmail.com',
      //     firstname: 'Admin',
      //     linkURL: 'shalomministrymovin4ward.org',
      //   }

      //   req.emailList = EMAIL_BLAST_LIST;
      //   req.systemMessage = EMAIL_BLAST_MESSAGE
      //   next();
    }

  },

  delete: {
    removeEmail: async (req, res) => {
      const email = await Email.findByIdAndDelete(req.params.id);
      if (!email) return res.status(404).send('Email not found.');

      res.status(200).send(`Email: ${email} deleted.`);
    }
  }

  //   put: {
  //     updateUserById: async (req, res) => {
  //       const userData = req.body;

  //       const updatedUser = await User.updateOne(
  //         { _id: req.params.id },
  //         { profilePictureUrl: userData.photoUrl }
  //       );
  //       // console.log(updatedUser);

  //       res.status(200).send(updatedUser);
  //     },
  //   },
};
