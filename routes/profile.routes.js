const express = require('express');
const jwtAuth = require('../auth/jwtAuth');
const ctrls = require('../controllers/profiles.controller');
const router = express.Router();

router.get('/', ctrls.getAll);

module.exports = router;