
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

require("dotenv").config();

mongoose.connect(process.env.Database_Url, { useNewUrlParser: true })
const db = mongoose.connection
db.once("open", () => {
    console.log("Connected");   
})
db.on("error", (error) => {
    console.log(error);
})

app.set("view-engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const authRoute = require("./routes/auth");
app.use("/auth", authRoute);

app.get("/", (req, res) => {
    res.render("index.ejs");    
})

app.listen(5000, () => {
    console.log("Server running at http://127.0.0.1:5000");
})


