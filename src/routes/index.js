const express = require('express');
const router = express.Router();

const authentication = require('../controllers/authentication');

router.post('/newAccount', authentication.newAccount);

module.exports = router;