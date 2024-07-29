const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/send', messageController);

router.get('.messages', messageController.getMessages);

module.exports = router;