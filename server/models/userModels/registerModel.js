const connection = require("../../connections/mysql.connection");

const userRegisterModel = async (data) => {
    let {username, email, password} = data;
    console.log("data from registerModel :", data)
    
    let [result] = await connection.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password]);

    return result;
}

module.exports = userRegisterModel;