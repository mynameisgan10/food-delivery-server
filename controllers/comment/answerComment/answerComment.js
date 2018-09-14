const answerComment = {
    newAnsComment: (req,res) => {
        res.json({
            status: "success",
            message: "new answer comment"
        })
    },
    deleteAnsComment: (req,res) => {
        res.json({
            status: "success",
            message: "delete answer comment"
        })
    }
}
module.exports = answerComment