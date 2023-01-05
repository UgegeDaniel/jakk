const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
const Student = require('../models/models')

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' })
    }
    const token = authorization.split(' ')[1]
    try {
        const { _id } = jwt.verify(token, JWT_SECRET);
        const student = await Student.findOne({ _id });
        if (!student) {
            throw new Error();
        }
        req.student = student;
    } catch (error) {
        return res.status(401).json({ error: 'Request is not authorized' })
    }
    next()
}
module.exports = requireAuth