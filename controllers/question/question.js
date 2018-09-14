

const question = {
    getAllQuestions: (req, res) => {
        res.json({status: "success", message: "got all the questions"})
    },
    newQuestion: (req, res) => {
        res.json({status: "success", message: "created new question"})
    },
    deleteQuestion: (req, res) => {
        res.json({status: "success", message: "deleted the question"})
    },
    upvoteQuestion: (req, res) => {
        res.json({status: "success", message: "upvoted question"})
    },
    downvoteQuestion: (req, res) => {
        res.json({status: "success", message: "downvoted question"})
    }
}

module.exports = question;