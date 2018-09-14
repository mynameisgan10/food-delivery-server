const express = require('express');
const app = express();
const auth = require('./routes/auth');
const question = require('./routes/question');
const answer = require('./routes/answer');
const comment = require('./routes/comment');

app.use('/api/v1/auth', auth);
app.use('/api/v1/question', question);
app.use('/api/v1/answer', answer);
app.use('/api/v1/comment', comment);

app.listen(4500, () => {
    console.log("connected to server");
})