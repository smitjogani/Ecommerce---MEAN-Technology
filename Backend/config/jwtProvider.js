const jwt = require('jsonwebtoken');
require("dotenv").config()
const SECRET_KEY = process.env.KEY;

const generateToken = (userId) => {
    const token = jwt.sign({userId},SECRET_KEY,{expiresIn:"24h"})
    return token;
}

const getUserIdFromToken = (token) => {
    const decodedToken = jwt.verify(token,SECRET_KEY);
    return decodedToken.userId;
}

module.exports  = {generateToken, getUserIdFromToken}