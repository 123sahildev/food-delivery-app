const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123mymysql",
    database : "food_delivery_app"
});

module.exports = pool.promise();