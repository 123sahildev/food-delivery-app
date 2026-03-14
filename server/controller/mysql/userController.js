const {userLoginModel, userRegisterModel} = require("../../models/mysqlModels/userForm.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

const userRegisterController =  async (req, res) => {
    let { username, email, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    let result = await userRegisterModel({ username, email, hashedPassword });

    return res.json(result);
}

const userLoginController = async (req, res) => {
    let result = await userLoginModel(req.body);
    let { password } = req.body;
    
    if (result.data) {
        let checkPassword = await bcrypt.compare(password, result.data.password);
        if (checkPassword) {
            let mySecret = process.env.MYSECRETKEY;
            let generatedToken = jwt.sign({ id: result.data.id }, mySecret, {expiresIn : "1m"});
            return res.json( {
                success : true,
                message : "login successful",
                token : generatedToken
            });
        }
    }

    return res.json(result);
    
}

module.exports = {userLoginController, userRegisterController};