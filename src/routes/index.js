const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const authenticationController = require('../controllers/authentication');
const authenticationMiddleware = require('../middlewares/authentication');

router.post('/newAccount', authenticationMiddleware.validateInput, userController.create);
router.post('/login', authenticationMiddleware.validateInput, authenticationController.login);

module.exports = router;