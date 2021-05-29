const express = require('express');
const jwtAuth = require('../auth/jwtAuth');
const db = require('../models');
const router = require('./profile.routes');
const ctrl = require('../controllers/user.controller')

router.post('/', ctrl.createUser);
router.post('/login', ctrl.login);

module.exports =  router;