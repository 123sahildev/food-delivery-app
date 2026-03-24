const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database : "food_delivery_app",
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool.promise();