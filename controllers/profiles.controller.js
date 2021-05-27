const db = require('../models/index');
require('dotenv').config();
const { QueryTypes } = require('sequelize');

const Profile = db.Profile;

exports.getAll = (req, res) => {
    Profile.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        })
    });
};