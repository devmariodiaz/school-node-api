const db = require('../models/index');
const { generateAccessToken } = require('../auth/jwtAuth');
const bcrypt = require('bcrypt');
require('dotenv').config();

const User = db.User;


exports.login = (req, res) => {
    const username = req.body.Username;
    const email = req.body.Email;
    const password = req.body.Password;

    User.findOne({ where: { Username: username }})
        .then(response => {
            if(response)
            {
                const validPasswords = bcrypt.compareSync(password, response.Password);
                if(validPasswords)
                {
                    const user = { 'Username': response.Username };
                    const token = generateAccessToken(user);
                    res.status(200).send({
                        'token': token
                    });
                }
                else
                {
                    res.status(401).send('Username or password provided are invalid');
                }
            }
            else 
            {
                res.status(401).send('Username or password provided are invalid');
            }
        })
        .catch(err => {
            res.status(401).send(err.message);
        });
}

exports.createUser = (req, res) => {
    const username = req.body.Username;
    const email = req.body.Email;
    const password = req.body.Password;
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
                res.send({
                    'StateId': response.StateId,
                    'Username': response.Username,
                    'Email': response.Email
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message
                });
            });
    })

}