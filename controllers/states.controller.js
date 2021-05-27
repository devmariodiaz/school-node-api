const db = require('../models/index');
require('dotenv').config();
const { QueryTypes } = require('sequelize');

const State = db.State;

exports.insert = async(req, res) => {
    let model = {
        'Name': req.body.Name
    };

    return await State.create(model)
    .then(response => {
        if(response)
            res.send(response);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

exports.getById = async(req, res) => {
    let id = req.params.id;
    if(!id) {
        res.status(404).send(`Id parameter is required`);
    }

    State.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

exports.getAll = async(req, res) => {
    // const [results, metadata] = await db.sequelize.query("SELECT StateId, Name FROM State", 
    // {
    //     type: QueryTypes.SELECT
    // });
    // res.send(results);
    // console.log(metadata);

    State.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}