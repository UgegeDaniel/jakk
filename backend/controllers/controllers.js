const jwt = require('jsonwebtoken')
const Student = require('../models/models')
const validator = require('validator')
const bcrypt = require("bcrypt")
const JWT_SECRET = process.env.JWT_SECRET

//TOKEN CREATION
const createToken = (_id) => {
    return jwt.sign({ _id }, JWT_SECRET, { expiresIn: '3d' })
}

//SIGN UP CREDENTIALS VALIDATION
const validateSignUpCredentials = async (email, password, userName) => {
    const error = [];
    if (!email || !validator.isEmail(email)) {
        error.push({ email: 'Please enter a valid Email Addresss' })
    }
    if (!password || !validator.isStrongPassword(password)) {
        error.push({ password: 'Please enter a strong password' })
    }
    if (!userName) {
        return error.length && error;
    }

    error.push({ userName: 'Please enter a valid userName' })
}

//LOG IN CREDENTIALS VALIDATION
const validateLoginCredentials = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword)
    if (!match) {
        throw new Error('Please provide a correct password')
    }
}

//LOG IN CREDENTIALS CONTROLLER
const loginStudent = async (req, res) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email })

    try {
        await validateLoginCredentials(password, student?.password)
        const token = createToken(student._id)
        const { userName } = student
        res.status(200).json({ email, token, userName })
    }
    catch (error) {
        return res.status(400).json({ error: "Invalid email or password" })
    }
}

//SIGN UP CREDENTIALS CONTROLLER
const signupStudent = async (req, res) => {
    const { email, password, userName } = req.body;
    const error = await validateSignUpCredentials(email, password, userName)
    if (error) {
        return res.status(400).json({ error })
    }
    try {
        const student = await Student.signup(email, password, userName)
        const token = createToken(student._id)
        res.status(200).json({ id: student._id, email, token, userName })
    } catch (err) {
        if (err.code = 11000) {
            return res.status(400).json({ error: "User already exists" })
        }
        res.status(500).json(err)
    }

}

//GET STUDENT HISTORY CONTROLLER
const getStudentHistory = async (req, res) => {
    try {
        res.status(200).json({ studentHistory: req.student })
    } catch (error) {
        res.status(500).json({ error })
    }
}

//UPDATE STUDENT HISTORY CONTROLLER
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
