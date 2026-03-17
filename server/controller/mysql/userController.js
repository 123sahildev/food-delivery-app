const {userLoginModel, userRegisterModel, userProfileAccessModel} = require("../../models/mysqlModels/userForm.model");
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
    let result = await userLoginModel(req.body.email);
    console.log("data from login userController :", result.data.password);
    
    if (result.success) {
        let checkPassword = await bcrypt.compare(req.body.password, result.data.password);
        console.log("check passwored compared :", checkPassword);
        
        if (checkPassword) {
            let mySecret = process.env.MYSECRETKEY;
            let generatedToken = jwt.sign({ id: result.data.id }, mySecret, { expiresIn: "3m"});
            res.cookie("token", generatedToken,
                {
                    httpOnly: true,
                    secure: false
                }
            );
            return res.json( {
                success : true,
                message : "login successful",
                token : generatedToken
            });
        }
    }
    return res.json({success: false, message: "user not found"});

    
}


userProfileAccessController = async (req, res) => {
    let result =  await userProfileAccessModel(req.id);
        if (result.success) {
            return res.json({ success: true, data: result.data});
        }
        return res.json({success: false});
}

const userLogoutController = async (req, res) => {
    console.log("token from cookie :", req.cookies.token);
    let check = res.clearCookie("token",
        {
            httpOnly: true,
            secure: false
        }
    );
    console.log("clear cookies result check :", check)
    return res.json({data: check})
}

module.exports = {userLoginController, userRegisterController, userProfileAccessController, userLogoutController};