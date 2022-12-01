import PropTypes from 'prop-types';
import { Button } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login';
// import { gapi } from "gapi-script";
// import handleAuth from './handleAuth'
import { Icon } from '../../assests'
const GOOGLE_CLIENT_ID = "18888730077-1n137rscdrhjqdmsl2dobtnah5dua920.apps.googleusercontent.com"
// window.gapi.load('client:auth2', () => {
//     window.gapi.client.init({
//         clientId: GOOGLE_CLIENT_ID,
//         plugin_name: "chat"
//     })
// })
const GoogleButton = ({ setNotification, isLogin, setStudent }) => {
    const googleSuccess = async (res, e) => {
        // const result = await res?.profileObj;
        // const { email, googleId, name: userName } = result
        // const password = `${googleId}jakkJAKK!@#`
        // const credentials = { email, password, userName }
        // const authParams = { isLogin, credentials, setStudent, setNotification }
        try {
            // await handleAuth(e, authParams)
        } catch (error) {
            console.log(error);
        }
    };
    const googleError = (error) => {
        const errorMsg = 'Google Sign In was unsuccessful. Try again later'
        setNotification({ show: true, msg: errorMsg, type: "danger" })
        console.log(errorMsg, error);
        return
    }
    return (
        <div style={{ marginLeft: "0.5rem" }}>
            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                render={(renderProps) => (
                    <Button style={{ borderRadius: "15px", padding: "0.25rem 0.5rem", fontSize: "14px", textTransform: "capitalize"}} color="primary" size="small"
                        onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                        {isLogin ? "Google Log in" : "Google Sign Up"}
                    </Button>
                )}
                onSuccess={googleSuccess} onFailure={googleError} cookiePolicy="single_host_origin"
            />
        </div>
    )
}
GoogleButton.propTypes = {
    setStudent: PropTypes.func,
    setNotification: PropTypes.func,
    isLogin: PropTypes.bool,
};
export default GoogleButton