const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../models/Car.js");

router.get("/", (req,res) => {
    res.render("Login/login.ejs");
})

router.post("/", async (req,res) => {
    const userEmail = req.body.email;
    const userPass = req.body.password;
    let error;

    try {
        const emailExists = await User.findOne({email: userEmail});
        if(!emailExists) {
            error = "User does not exist!";
            console.log("User does not exist!");
        }
        else {
            const validatePass = await bcrypt.compare(userPass, emailExists.password);
            if(!validatePass) {
                error = "Password incorrect!";
                res.redirect("");
            } 
        }
        res.redirect("/");
    }    
    catch(err) {
        console.log(err);
    }
})

module.exports = router;