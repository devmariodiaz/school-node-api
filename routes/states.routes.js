const express = require('express');
const { tokenVerification } = require('../auth/jwtAuth');
const db = require('../models');
const ctrls = require('../controllers/states.controller')
const router = express.Router();

router.get('/', tokenVerification, ctrls.getAll);
router.get('/:id', tokenVerification, ctrls.getById);
router.post('/', tokenVerification, ctrls.insert);

module.exports = router;