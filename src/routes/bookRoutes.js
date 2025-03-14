const express = require('express');
const dbBooks = require('../services/controllers.js');

const router = express.Router();

router.get('/', dbBooks)

module.exports = router;