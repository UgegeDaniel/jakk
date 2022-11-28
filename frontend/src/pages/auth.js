import PropTypes from 'prop-types';
import { Box, Container, Paper, Typography, Button, TextField } from '@material-ui/core'
import { useStyles, theme } from '../components/styles'
import { useState } from 'react'
import { FaKey, FaTimes } from "react-icons/fa"
import { useLocation, Link } from 'react-router-dom'
import GoogleButton from './GoogleButton';
import handleAuth from './handleAuth'
import inputProps from './input-props'

const text = "JAKK is a simple full stack application geared towards aiding students sitting for various O - Level Examinations with a progressive and accessible means of practicising. Students are required to sign up for a free account, take tests in over 17 subjects as their records over time are being displayed on a chart for a visual representation of their progress."
const Auth = ({ setNotification, setStudent }) => {
    const classes = useStyles();
    const [showForm, setShowForm] = useState(false);
    const [credentials, setCredentials] = useState({ userName: '', email: '', password: '', confirmPassword: '' })
    const [isLogin, setIsLogin] = useState(false)
    const location = useLocation()
    const authParams = { isLogin, credentials, setStudent, setNotification }
    const [showPassword, setShowPassword] = useState(false)
    const data = inputProps(credentials, isLogin, setShowPassword, showPassword)

    return (
        <Box container display="flex" justifyContent="center" align="center" style={{ position: "relative" }} >
            {!showForm &&
                <div>
                    <Typography color="secondary" style={{ margin: "2rem", maxWidth: "800px" }}>{text}</Typography>
                    <Button variant="contained" color="primary" onClick={()=> setShowForm(true)}>Login / Sign up</Button>
                </div>
            }
            {showForm &&
                <Paper style={{ position: "absolute", top: "100%", left: "50%", transform: "translate(-50%, -50%)", marginTop: '2rem', width: "90%", maxWidth: "700px", height: "90%", border: `3px solid ${theme.palette.primary.main}` }}>
                    <form autoComplete="off" noValidate gutterbottom="true" display="flex" align="center" >
                        <Paper>
                            <FaTimes onClick={()=> setShowForm(prevState => false)} style={{ fontSize: "1.5rem", position: "absolute", top: "0.8rem", right: "2rem", color: ` ${theme.palette.red.main}`}}/>
                            <Typography variant="h6" component="h2" gutterBottom color="textPrimary"> {isLogin ? 'Log In' : 'Sign Up'} </Typography>
                            <div className={classes.underline}></div>
                            <Container>
                                {data.map((item, index) => (
                                    item.show &&
                                    <div key={index}>
                                        <TextField className={classes.field} variant='outlined' label={item.label} fullWidth align="center" size="small"
                                            InputProps={item.props} type={item.type} value={item.value} name={item.name}
                                            onChange={(e) => { setCredentials({ ...credentials, [e.target.name]: e.target.value }) }} color="secondary" />
                                        {item.show && <Typography component="i" variant="caption" align="right" fontSize="12px" gutterBottom color="secondary"
                                            style={{ fontSize: "0.75rem", margin: "auto", display: "block", width: "100%", marginLeft: "auto" }}>{item.example}</Typography>}
                                    </div>
                                ))}
                            </Container>
                            <GoogleButton setNotification={setNotification} isLogin={isLogin} setStudent={setStudent} />
                            <div className={classes.my} >
                                <Link to={location.pathname}>
                                    <Button className={classes.btn} startIcon={<FaKey />} variant='contained' color="secondary" size="small" type="submit" onClick={(e) => handleAuth(e, authParams)}>
                                        {!isLogin ? 'Sign up' : 'Login'}
                                    </Button>
                                </Link>
                            </div>
                            <Typography>{isLogin ? "Don't have an account ?" : "Already have an account ?"} </Typography>
                            <Button color="primary" size="small" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Sign Up" : "Log in"}</Button>
                        </Paper>
                    </form>
                </Paper>
            }
        </Box>
    )
}
Auth.propTypes = {
    setNotification: PropTypes.func,
    setStudent: PropTypes.func,
};
export default Auth