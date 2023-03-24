const express = require("express");
const router = express.Router();

const authenticationMiddleware = require("../middlewares/authentication");

const userController = require("../controllers/user");
const authenticationController = require("../controllers/authentication");
const scoreController = require("../controllers/score");

router.post("/newAccount", authenticationMiddleware.validateInput, userController.create);
router.post("/login", authenticationMiddleware.validateInput, authenticationController.login);
router.post("/saveScore", authenticationMiddleware.validateToken, scoreController.create);
router.post("/leaderBoard", authenticationMiddleware.validateToken, scoreController.leaderBoard);

module.exports = router;