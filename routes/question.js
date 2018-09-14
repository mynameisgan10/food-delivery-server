const express = require('express');
const router = express.Router();
const question = require('../controllers/question/question');

router.get('/all', question.getAllQuestions);

router.post('/new', question.newQuestion);

router.post('/upvote', question.upvoteQuestion);

router.post('/downvote', question.downvoteQuestion);

router.delete('/delete', question.deleteQuestion);

module.exports = router;