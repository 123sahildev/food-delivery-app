const express = require("express");
const routers = express.Router();

routers.get("/", (req, res) => {
    console.log("chal raha hai")
    res.send("chal raha hai server backend ka!")
})


module.exports = routers;