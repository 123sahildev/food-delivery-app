const jwt = require("jsonwebtoken");
require("dotenv").config();
const userLoginAuth = (req, res, next) => {
    try {
        let mySecret = process.env.MYSECRETKEY;
       let token = req.cookies.token;
        if (!token) {
            return res.json({ success : false, message : "token not exists"})
        }
        let decoded = jwt.verify(token, mySecret);
        req.id = decoded;
        next();
        
    } catch (error) {
        return res.json({ status : "token exprises"});
    }
}

module.exports = userLoginAuth;