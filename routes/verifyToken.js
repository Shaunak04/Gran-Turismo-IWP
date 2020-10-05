const jwt = require("jsonwebtoken");

module.exports = function(req,res,next) {
    const token = req.header("jwt-token");
    if(!token) {
        return res.send("Access Denied");
    }

    try {
        const verifiedToken = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = verifiedToken;
    }catch(err) {
        res.send("Invalid Token");
    }
};

