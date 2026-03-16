const express = require("express");
const routers = express.Router();
const {userRegisterController, userLoginController} = require("../controller/mysql/userController");
const userLoginAuth = require("../authentication/userLogin.auth");

routers.get('/profile', userLoginAuth, (req, res) => {
    console.log("authorization :", req.id);
    return res.json({message : "route passed successfully", id: req.id});
});

routers.post("/register", userRegisterController);

routers.post("/login", userLoginController);

module.exports = routers;