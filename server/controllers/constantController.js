const {Constant} = require('../models/constantModel');

module.exports = {
    get: {
        getConstantByType: async (req, res) => {
            const constantType = req.params.type;

            const constantFoundByType = await Constant.findOne({type: constantType});

            res.status(200).send(constantFoundByType);
        }
    }
}