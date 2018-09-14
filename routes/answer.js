const express = require('express');
const router = express.Router();
const answer = require('../controllers/answer/answer');

router.post('/new', answer.newAnswer);

router.post('/upvote', answer.upvoteAnswer);

router.post('/downvote', answer.downvoteAnswer);

router.delete('/delete', answer.deleteAnswer);

module.exports = router;