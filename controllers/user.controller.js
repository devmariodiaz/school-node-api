const db = require('../models/index');
const bcrypt = require('bcrypt');
require('dotenv').config();

const User = db.User;


exports.login = (req, res) => {

}

exports.createUser = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const saltRounds = 10;

    if(!username && !password)
    {
        return res.status(400).send({
            error: 'Username and Password must be provided'
        });
    }

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err)
        {
            res.status(500).send('There is and error');
        }

        let model = {
            'Username': username,
            'Password': hash,
            'Email': email
        }

        User.create(model)
            .then(response => {
                res.send(response);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message
                });
            });
    })

}