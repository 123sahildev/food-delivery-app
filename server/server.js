const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routers/userRoutes");
const productRoutes = require("./routers/productRoutes");

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);


app.listen(3000, () => {
    console.log("The server is runing successfully")
})