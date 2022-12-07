// import { login, signup } from '../../api'
const handleAuth = async (e, isLogin, credentials, setStudent, setNotification, navigate) => {
    e && e.preventDefault();
    if (isLogin) {
        // const response = await login(credentials)
        // const {data} = response
        // if (response.msg === 'success') {
        //     setStudent(data)
        //     navigate("/dashboard")
              setNotification({ show: true, type: "success", msg: 'Congratualations Login Successfull !!!' })
              navigate('/dashboard')
        // } else {
            // setNotification({ show: true, msg: response.error, type: "danger" })
        // }
    } else {
        // const response = await signup(credentials)
        // const {data} = response
        // if (response.msg === 'success') {
        //     setStudent(data)
        //     navigate("/dashboard")
           setNotification({ show: true, type: "success", msg: 'Congratualations Sign up Successfull !!!' })
           navigate('/dashboard')
        // } else {
            // setNotification({ show: true, msg: response.error, type: "danger" })
        // }
    }
}
export default handleAuth