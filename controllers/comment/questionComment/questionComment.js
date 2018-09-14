const questionComment = {
    newQnsComment: (req, res) => {
        res.json({status: "success", message: "new question comment"})
    },
    deleteQnsComment: (req, res) => {
        res.json({status: "success", message: "delete question comment"})
    }
}

module.exports = questionComment;