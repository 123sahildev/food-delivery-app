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
    
    if (result.success) {
        let checkPassword = await bcrypt.compare(req.body.password, result.data.password);
        
        if (checkPassword) {
            let ACCESS_SECRET = process.env.ACCESS_SECRET;
            let REFRESH_SECRET = process.env.REFRESH_SECRET;
            let generatedRefreshToken = jwt.sign({ id: result.data.id }, REFRESH_SECRET, { expiresIn: "7d"});
            let generatedAccessToken = jwt.sign(
                { id: result.data.id },
                ACCESS_SECRET,
                { expiresIn: "3m"}
            )

            let { username, email } = result.data;
            res.cookie("token", generatedRefreshToken,
                {
                    httpOnly: true,
                    secure: false
                }
            );
            return res.json( {
                success : true,
                message : "login successful",
                accessToken: generatedAccessToken,
                data: { username, email}
            });
        }

    }
    return res.json({success: false, message: "user not found"});

    
}


userProfileAccessController = async (req, res) => {
    let result =  await userProfileAccessModel(req.id);
        if (result.success) {
            return res.json({ success: true, data: result.data, accessToken: req.accessToken});
        }
        return res.json({success: false});
}

const userLogoutController = async (req, res) => {
    try {
        res.clearCookie("token",
            {
                httpOnly: true,
                secure: false
            }
        );
        return res.json({message: "logout successfull!"})
        
    } catch (error) {
        console.log(error);
        res.json({message: "error logout failed"});
    
    }
}

module.exports = {
    userLoginController, 
    userRegisterController, 
    userProfileAccessController, 
    userLogoutController
};