const express = require('express');
const router = express.Router();

const authenticationController = require('../controllers/authentication');
const authenticationMiddleware = require('../middlewares/authentication');

router.post('/newAccount', authenticationMiddleware.validateNewAccount, authenticationController.newAccount);

module.exports = router;