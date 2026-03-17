const connection = require("../../connections/mysql.connection.js");
const bcrypt = require("bcrypt");

const userRegisterModel = async (data) => {
    try {
        let {username, email, hashedPassword} = data;
        let [result] = await connection.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, hashedPassword]);

        return {
            success : true,
            message : "data inserted successfully"
        }

    } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
            return { 
                success : false,
                message : "duplicate error"
             }
        }

        return {
            success : false,
            message : "database error"
        }
    }
}

const userLoginModel = async (email) => {
    try {
        let [result] = await connection.query("SELECT * FROM users WHERE email = ? ", [email]);
        console.log("result from loginModel.js :", result);
        if (result.length > 0) {
            return {
                success: true,
                data: result[0]
            }
        }

        return {
            success : false,
            message : "user not found"
        };

    } catch (error) {
        console.log(error);
        return {
            success : false,
            message : "data base error"
        }
    }
}

const userProfileAccessModel = async (id) => {

    try {
        let [rows] = await connection.query("SELECT * FROM users WHERE id = ?", [id]);
        if (rows.length > 0) {
            return {success: true, data: rows[0]}
        }
        return {success: false}
    } catch (error) {
        console.log(error);
    }
}

module.exports = {userLoginModel, userRegisterModel, userProfileAccessModel};