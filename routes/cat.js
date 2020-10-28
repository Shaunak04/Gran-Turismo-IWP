const express = require("express");
const router = express.Router();
const Cars = require("../models/Car.js");

router.get("/", async (req,res) => {

    try {
        const allCars = await Cars.find({});
        res.render("categories/categories.ejs", {cars: allCars});
    }
    catch(error) {
        console.log(error);
        res.redirect("/");
    }
})

router.get("/:name", async (req,res) => {

    try {
        const allCars = await Cars.find({category: req.params.name });
        res.render("categories/dyn_cat.ejs", {cars: allCars});
    }
    catch(error) {
        console.log(error);
        res.redirect("/");
    }
})


module.exports = router;
