const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {

    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: "Authorization token is required" })
    }
    // authorization headers = `Bearer ${user.token}`
    const token = authorization.split(' ')[1]


    try {
        const { _id } = jwt.verify(token, process.env.SECRET)
        //verifies the token and returns the payload or document, and we are grabbing the _id

        req.user = await User.findOne({ _id }).select('_id')
        // select _ returns an object only with _id property
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Request is not authorized' })
    }

}
module.exports = requireAuth