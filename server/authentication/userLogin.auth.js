const jwt = require("jsonwebtoken");
const { head } = require("../routers/userRoutes");
require("dotenv").config();
const userLoginAuth = (req, res, next) => {
    try {
        let mySecret = process.env.MYSECRETKEY;
        let header = req.headers.authorization;
        console.log("header :", header);

        let token = header.split(" ")[1];

        if (!header) {
            return res.json({ success : false, message : "not headers"})
        }
        console.log(token);
        let decoded = jwt.verify(token, mySecret);
        req.id = decoded;
        next();
        
    } catch (error) {
        return res.json({ status : "token exprises"});
    }
}

module.exports = userLoginAuth;