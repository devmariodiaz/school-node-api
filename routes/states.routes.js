const express = require('express');
const jwtAuth = require('../auth/jwtAuth');
const db = require('../models');
const ctrls = require('../controllers/states.controller')
const router = express.Router();

router.get('/', ctrls.getAll);
router.get('/:id', ctrls.getById);
router.post('/', ctrls.insert);

module.exports = router;