import { useState } from 'react'
import PropTypes from 'prop-types';
import { Container, Typography, TextField } from '@material-ui/core'
import inputProps from './input-props'
import { useStyles } from '../../styles'

const Inputs = ({ isLogin, credentials, handleChange }) => {
    const [showPassword, setShowPassword] = useState(false)
    const classes = useStyles()
    const inputFields = inputProps(credentials, isLogin, setShowPassword, showPassword)
    const exampleInputStyle = { fontSize: "0.75rem", margin: "auto", display: "block", width: "100%", marginLeft: "auto" }

    return (
        <Container>
        {inputFields.map((feild, index) => {
            const { show, label, name, value, type, props, example } = feild
            return (
                show &&
                <div key={index}>
                    <TextField className={classes.field} variant='outlined' label={label} fullWidth align="center" size="small"
                        InputProps={props} type={type} value={value} name={name}
                        onChange={handleChange} color="secondary" />
                    <Typography component="i" variant="caption" align="right" fontSize="12px" gutterBottom color="secondary"
                        style={exampleInputStyle}>
                        {example}
                    </Typography>
                </div>
            )
        })}
    </Container>
    )
}
Inputs.propTypes = {
    credentials: PropTypes.object,
    setCredentials: PropTypes.func,
    isLogin: PropTypes.bool,
};
export default Inputs