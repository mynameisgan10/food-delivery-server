const express = require('express');
const router = express.Router();
const comment = require('../controllers/comment/comment');


router.post('/answer/new',comment.newAnsComment);
router.post('/answer/delete',comment.deleteAnsComment);
router.post('/question/new',comment.newQnsComment);
router.post('/question/delete',comment.deleteQnsComment);


module.exports = router;