const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123mymysql",
    database : "food_delivery_app",
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool.promise();