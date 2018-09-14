const answer = require('./answerComment/answerComment');
const question = require('./questionComment/questionComment');

const comment = {
    ...answer,
    ...question
}

module.exports = comment;