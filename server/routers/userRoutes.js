const express = require("express");
const routers = express.Router();
const userRegisterController = require("../controller/mysql/userController");

routers.post("/register", userRegisterController);

routers.post("/login", (req, res) => {
    console.log(req.body);
    res.json({message : "chal raha hai login"});
});

module.exports = routers;