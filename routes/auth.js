const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const User = require("../models/User.js");

router.post("/register", async (req,res) => {
    console.log(req.body.name);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    try {
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