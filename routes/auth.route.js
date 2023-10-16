const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/getOTP', authController.generateOTP);

module.exports = router;