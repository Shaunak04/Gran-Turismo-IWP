const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req,res) => {
    res.send("Hey! Seems like u are logged in!");
})

module.exports = router;