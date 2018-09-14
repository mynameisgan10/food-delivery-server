const answer = {
    newAnswer: (req,res) => {
        res.json({
            status: "success",
            message: "added new answer"
        })
    },
    deleteAnswer: (req,res) => {
        res.json({
            status: "success",
            message: "deleted answer"
        })
    },
    upvoteAnswer: (req,res) => {
        res.json({
            status: "success",
            message: "answer upvoted!"
        })
    },
    downvoteAnswer: (req,res) => {
        res.json({
            status: "success",
            message: "answer downvoted"
        })
    }
}

module.exports = answer;