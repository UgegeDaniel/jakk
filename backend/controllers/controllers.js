const jwt = require('jsonwebtoken')
const Student = require('../models/models')
const validator = require('validator')
const bcrypt = require("bcrypt")
const JWT_SECRET = process.env.JWT_SECRET

const createToken = (_id) => {
    return jwt.sign({ _id }, JWT_SECRET, { expiresIn: '3d' })
}

const validateSignUpCredentials = async (email, password, userName) => {
    const error = [];
    if (!email || !validator.isEmail(email)) {
        console.log(email)
        error.push({ email: 'Please enter a valid Email Addresss' })
    }
    if (!password || !validator.isStrongPassword(password)) {
        error.push({ password: 'Please enter a strong password' })
    }
    if (!userName) {
        error.push({ userName: 'Please enter a valid userName' })
    }
    return error.length && error;
}

const validateLoginCredentials = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword)
    if (!match) {
        throw new Error('Please provide a correct password')
    }
}

const loginStudent = async (req, res) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email })
    try {
        await validateLoginCredentials(password, student?.password)
        const token = createToken(student._id)
        const { userName } = student
        return res.status(200).json({ id:student._id, email, password, userName, token, history: student.history })
    }
    catch (error) {
        return res.status(400).json({ error })
    }
}

const signupStudent = async (req, res) => {
    const { email, password, userName } = req.body;
    const error = await validateSignUpCredentials(email, password, userName)
    if (error) {
        return res.status(400).json({ error })
    }
    try {
        const student = await Student.signup(email, password, userName)
        const token = createToken(student._id)
        return res.status(200).json({ id:student._id, email, password, userName, token, history: student.history })
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({ error: "Student already exists" })
            return
        }
        res.status(500).json(err)
    }

}

const getStudentHistory = async (req, res) => {
    try {
        res.status(200).json({ studentHistory: req.student })
    } catch (error) {
        res.status(500).json({ error })
    }
}

const updateStudentHistory = async (req, res) => {
    const { newData } = req.body;
    try {
        const student = req.student;
        student.history = [...student.history, newData];
        await student.save();

        res.status(201).json({ history: student.history })
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = {
    loginStudent,
    signupStudent,
    getStudentHistory,
    updateStudentHistory
}
