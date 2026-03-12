const connection = require("../../connections/mysql.connection");

const userRegisterModel = async (data) => {
    try {
        let {username, email, password} = data;
        let [result] = await connection.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password]);

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



const userLoginModel = async (data) => {
    try {
        let {email, password} = data;
        console.log("form data from userFomr.model.js :", data);

        let [result] = await connection.query("SELECT * FROM users WHERE email = ?", [email]);

        return {
            success : true,
            data : result
        };

    } catch (error) {
        console.log(error);
        return {
            success : false,
            message : "user not found"
        };
    }

}

module.exports = {userLoginModel, userRegisterModel};