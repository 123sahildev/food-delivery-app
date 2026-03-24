const jwt = require("jsonwebtoken");
require("dotenv").config();
const userLoginAuth = (req, res, next) => {
    try {
        let REFRESH_SECRET = process.env.REFRESH_SECRET;
        let ACCESS_SECRET = process.env.ACCESS_SECRET;
        let token = req.cookies.token;
        if (!token) {
            return res.json({ success: false, message: "token not exists"})
        }
        let decoded = jwt.verify(token, REFRESH_SECRET);
        let newAccessToken = jwt.sign({id: decoded.id}, ACCESS_SECRET, { expiresIn: "3m"});
        req.id = decoded.id;
        req.accessToken = newAccessToken;
        next();
        
    } catch (error) {
        return res.json({ success: false, status: "token exprises"});
    }
}

module.exports = userLoginAuth;