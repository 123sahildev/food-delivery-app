const model = require("../../models/./userModels/registerModel");


const userRegisterController =  async (req, res) => {
    let {username, email, password} = req.body;
    console.log("Data from controller :", req.body);
    let result = await model(req.body);

    res.json({
        message : result
    });
}

module.exports = userRegisterController;