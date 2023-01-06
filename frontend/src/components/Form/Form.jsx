/* eslint-disable jsx-a11y/aria-role */
import { useState, memo } from 'react'
import PropTypes from 'prop-types';
import { Button, Typography, Paper, } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { FaKey } from "react-icons/fa"
import Inputs from './Inputs';
// import GoogleButton from './GoogleButton';
import { Btn } from '../'
import handleAuth from './handleAuth'

const Form = memo(({ setStudent, setNotification }) => {
    const [credentials, setCredentials] = useState({ userName: '', email: '', password: '', confirmPassword: '' })
    const { password, confirmPassword } = credentials
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const onSuccess = (successMsg, successData) => {
        setStudent(successData)
        navigate('/dashboard')
        setNotification({ show: true, msg: successMsg, type: 'success' })
    }
    const onError = (errors) => {
        let errorMsg = ''
        if(Array.isArray(errors)){
            errors.forEach((error) => {
                errorMsg += `${Object.values(error)}, `
            })
            setNotification({ show: true, msg: errorMsg, type: 'danger' })
            return
        }
        errorMsg = errors
        setNotification({ show: true, msg: errorMsg, type: 'danger' })
        return
    }
    const handleSubmit = (e) => {
        if (!isLogin && (password !== confirmPassword)) {
            setNotification({ show: true, msg: 'Passwords Do Not Match', type: 'danger' })
            return
        }
        handleAuth(e, isLogin, credentials, onError, onSuccess)
        return
    }
    return (
        <form autoComplete="off" noValidate gutterbottom="true" display="flex" align="center" >
            <Paper>
                <Typography variant="h6" component="h2" gutterBottom color="secondary">
                    <i role="title">{isLogin ? 'Log In' : 'Sign Up'}</i>
                </Typography>
                <Inputs handleChange={handleChange} credentials={credentials} isLogin={isLogin} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "auto 1rem" }}>
                    <Btn
                        btnTxt={!isLogin ? 'Sign up' : 'Login'}
                        handleClick={(e) => handleSubmit(e)}
                        Icon={FaKey}
                    />
                </div>
                <Typography component="i" >{isLogin ? "Don't have an account ?" : "Already have an account ?"} </Typography>
                <Button color="primary" size="small" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Sign Up" : "Log in"}</Button>
            </Paper>
        </form>
    )
})

Form.propTypes = {
    student: PropTypes.object,
    setNotification: PropTypes.func,
};
export default Form