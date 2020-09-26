const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const router = express.Router();
const User = require("../models/User.js");

router.post("/register", async (req,res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        const saveUser = await user.save();
        console.log(user);
        res.redirect("/");
    }
    catch(err) {
        console.log(err);
    }
});

router.get("/register", (req,res) => {
    res.render("Auth/register.ejs");
})

module.exports = router;