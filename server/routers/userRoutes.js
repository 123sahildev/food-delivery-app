const express = require("express");
const routers = express.Router();
const {userRegisterController, userLoginController, userProfileAccessController, userLogoutController} = require("../controller/mysql/userController");
const userLoginAuth = require("../authentication/userLogin.auth");

routers.get('/profile', userLoginAuth, userProfileAccessController);

routers.post("/register", userRegisterController);

routers.post("/login", userLoginController);

routers.post("/logout", userLogoutController);

module.exports = routers;