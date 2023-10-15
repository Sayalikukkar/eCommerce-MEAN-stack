const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.createUser);

module.exports = router;