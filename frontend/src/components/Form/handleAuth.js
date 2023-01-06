import { login, signup } from '../../api'

const handleAuth = async (e, isLogin, credentials, onError, onSuccess) => {
    e.preventDefault();
    const successMsg = `Congratualations ${isLogin ? "Login" : "Signup"} Successfull !!!`
    try {
        const response = isLogin ? await login(credentials) : await signup(credentials)
        const { msg } = response
        msg === "error"
            ? onError(response.error)
            : onSuccess( successMsg, response.data )
    } catch (error) {
        console.log('dd', error)
    }
}
export default handleAuth