const express = require("express");
const mongoose = require("mongoose");
const app = express();
var path = require('path');
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

app.use(express.static(path.join(__dirname,"public")));
app.set("view-engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const brandRoute = require("./routes/brand");
const helpRoute = require("./routes/help");
const catRoute = require("./routes/cat");

//const loginRoute = require("./routes/login");
//const privateRoute = require("./routes/private");
app.use("/brands", brandRoute);
app.use("/helpdesk", helpRoute);
app.use("/categories", catRoute);

//app.use("/login", loginRoute);
//app.use("/private", privateRoute);

app.get("/", (req, res) => {
    res.render("home/index.ejs");    
})

app.listen(5000, () => {
    console.log("Server running at http://127.0.0.1:5000");
})


