const express = require("express");
const routes = express.Router();

routes.post("/profile", (req, res) => {
    console.log("the profile route is running");
    res.send("profile route is working fine!");
});

module.exports = routes;