const express = require("express");
const router = express.Router();
const Cars = require("../models/Car.js");

router.get("/", (req,res) => {
    res.render("brands/brands.ejs");
})

router.get("/:name", async (req,res) => {

    try {
        const allCars = await Cars.find({brandName: req.params.name});
        res.render("brands/card.ejs", {cars: allCars});
    }
    catch(error) {
        console.log(error);
        res.redirect("/");
    }
})

module.exports = router;