const User = require("../models/user")

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "no user in found in db"
            })
        }
        req.profile = user
        next()
    })
}

exports.getUser = (req, res) => {

    //get back here for password
    req.profile.salt = undefined
    req.profile.encry_password = undefined
    return res.json(req.profile)
}

exports.getAllUsers = (req, res) => {
    User.find().exec((err, users) => {
        if (err || !users) {
            return res.status(4000).json({
                error: "no user"
            })
        }
        res.json(users)
    })
}