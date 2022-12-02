import { useState, memo } from 'react'
import PropTypes from 'prop-types';
import { Button, Typography, Paper, } from '@material-ui/core'
import {useNavigate} from 'react-router-dom'
import { FaKey } from "react-icons/fa"
import Inputs from './Inputs';
import GoogleButton from './GoogleButton';
import { LeftBtn } from '../'
import handleAuth from './handleAuth'

const Form = memo(({ setStudent, setNotification }) => {
    const [credentials, setCredentials] = useState({ userName: '', email: '', password: '', confirmPassword: '' })
    const { password, confirmPassword } = credentials
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        if (password !== confirmPassword) {
            setNotification({ show: false, msg: 'Passwords Do Not Match', type: 'danger' })
        } else {
            handleAuth(e, isLogin, credentials, setStudent, setNotification, navigate)
        }
    }
    return (
        <form autoComplete="off" noValidate gutterbottom="true" display="flex" align="center" >
            <Paper>
                <Typography variant="h6" component="h2" gutterBottom color="secondary">
                    <i>{isLogin ? 'Log In' : 'Sign Up'}</i>
                </Typography>
                <Inputs handleChange={handleChange} credentials={credentials} isLogin={isLogin} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "auto 1rem" }}>
                    <GoogleButton setNotification={setNotification} isLogin={isLogin} setStudent={setStudent} />
                    <LeftBtn
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
    setStudent: PropTypes.func.isRequired,
    setNotification: PropTypes.func.isRequired,
};
export default Form