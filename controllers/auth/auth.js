const auth = {
    login: (req, res) => {
        res.json({status: "success", message: "authenticated"})
    },
    signup: (req, res) => {
        res.json({status: "success", message: "signed up"})
    }
}

module.exports = auth;