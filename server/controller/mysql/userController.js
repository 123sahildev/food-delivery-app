const {userLoginModel, userRegisterModel} = require("../../models/mysqlModels/userForm.model");

const userRegisterController =  async (req, res) => {
    let {username, email, password} = req.body;
    let result = await userRegisterModel(req.body);
    console.log("result type userController.js :", typeof(result));
    res.json(result);
}

const userLoginController = async (req, res) => {
    let {email, password} = req.body;
    console.log("form data from userController.js :", req.body);
    let result = await userLoginModel(req.body);
    return result;
}

module.exports = {userLoginController, userRegisterController};