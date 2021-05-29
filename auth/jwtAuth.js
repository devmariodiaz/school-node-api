const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateAccessToken = (user) =>{
    return jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
}

const tokenVerification = (req, res, next) => {
    
    const header = req.header('Authorization');
    if(!header)
        res.status(400).send('Bad Request');
    else
    {
        const token = header.split(' ')[1];

        if(!token){
            return res.status(403).send({
                message: 'No token provided'
            });
        }

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) =>{
            if(err){
                return res.status(401).send({
                    message: 'Unauthorized'
                });
            }
            next();
        });
    }
}

module.exports = {
    tokenVerification,
    generateAccessToken
}