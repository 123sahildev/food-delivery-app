const express = require("express");
const routers = express.Router();
const {userRegisterController, userLoginController} = require("../controller/mysql/userController");

routers.post("/register", userRegisterController);

routers.post("/login", userLoginController);

module.exports = routers;