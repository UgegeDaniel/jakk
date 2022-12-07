import { makeStyles, createTheme } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'

//CONSTANTS
const constants = {
    borderRadius: '15px'
}

//THEME 
export const theme = createTheme({
    palette: {
        primary: { main: '#324B4A' },
        secondary: { main: '#2A928F' },
        red: { main: '#FF6961' },
        green: { main: '#77DD77' },
    },
    typography: { fontFamily: 'Poppins', fontWeightLight: 400, fontWeightRegular: 500, fontWeightMedium: 600, fontWeightBold: 700, }
})

//STYLES HOOK (ARRANGED BY COMPONENTS)
export const useStyles = makeStyles((theme) => ({
    error: {
        border: (note) => {
            if (note) {
                return '1px solid red'
            }
        }
    },
    //      >>>>        UTILITIES
    underline: { height: "0.25rem", width: "5rem", background: theme.palette.primary.main, marginLeft: "auto", marginRight: "auto", borderRadius: constants.borderRadius },
    flex: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', flexWrap: 'wrap' },
    mc: { margin: '10px auto', display: 'block', width: 'auto' },
    mr: { marginRight: 20, marginTop: 20, marginBottom: 5 },
    mt: { marginTop: 20 },
    my: { marginTop: 10, marginBottom: 10 },
    ml: { marginLeft: 20 },
    chipStyle: { margin: "0 0.25rem", color: "#fff", padding: "0.5rem", backgroundColor: `${theme.palette.primary.main}`, borderRadius: "2rem", minWidth: "1rem", },
    //      >>>>        APPHEADER
    header: { display: "flex", justifyContent: 'space-between', },
    logoContainer: { display: "flex", alignItems: "center", justifyContent: "center", },
    logo: { width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" },
    logoStyle: { width: "100%", height: "100%", borderRadius: "50%" },
    userChip: { backgroundColor: purple[500], color: "#fff", margin: "0.5rem 32px", },
    mobile: { position: 'fixed', display: 'flex', flexDirection: 'column', top: '10vh', right: '2vw' },
    avatar1: { margin: theme.spacing(1), backgroundColor: theme.palette.secondary.main, },
    toolbar: theme.mixins.toolbar,
    //      >>>>        MODAL COMPONENT
    modalStyle: { position: "relative", maxWidth: "80%", margin: "3rem" },
    closeModalStyle: { fontSize: "1rem", position: "absolute", top: "1rem", right: "1rem", color: ` ${theme.palette.red.main}`, cursor: "pointer", borderRadius: "50%", border: `2px solid ${theme.palette.red.main}`, padding: "5px" },


    //      >>>>        HERO
    middleImg: { marginLeft: 20, zIndex: 3 },
    bottomImg: { marginTop: -200, marginLeft: -120 },
    topImg: { marginBottom: -30, marginLeft: -25 },
    hero: { width: '100%', height: '100%' },
    imgContainer: { display: "flex", minHeight: '100%', minWidth: '100%', alignItems: 'center', justifyContent: 'center' },
    heroText: { minHeight: '100%', minWidth: '100%' },
    //      >>>>        FORM STYLES
    form: { padding: 'auto 0', margin: 'auto 0', width: '97%', height: '100%', },
    googleButton: { marginBottom: theme.spacing(2), marginRight: 20 },
    inputExample: { fontSize: "12px" },
    //      >>>>        DASHBOARD
    chart: { maxHeight: '40vh', maxWidth: '90%', },
    title: { textDecoration: 'underline', marginBottom: 20, padding: theme.spacing(3) },
    field: { marginTop: 10, marginBottom: 10, display: 'block', padding: 10, textAlign: 'center', fontSize: '8px' },
    paper: { padding: '40px' },
    img: { width: '150px', height: '150px', margin: '10px auto', borderRadius: '38% 62% 53% 47% / 40% 41% 59% 60%', border: '1px solid hsl(250, 34%, 43%)' },
    paperStyle: { position: "relative", margin: "auto auto", marginLeft: "auto", width: "90%", maxWidth: "700px", maxHeight: "100vh", border: `3px solid ${theme.palette.primary.main}` },

    //      >>>>        NOTIFICATION
    notification: { position: "fixed", left: '20vw', marginTop: '20px', top: '10vh', zIndex: 99999 },
    //      >>>>        QUESTIONS
    option: { ...theme.typography.body2, padding: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary, borderRadius: constants.borderRadius },
    //      >>>>  //      >>>> //      >>>> MEDIA QUERRIES <<<<<        //<<<<<         //<<<<<         //
    [theme.breakpoints.down('sm')]: {
        examBodies: { display: "none", },
    },
    [theme.breakpoints.up('xs')]: {
        hamburger: { display: "none", },
        mobile: { position: 'block', display: 'flex', flexDirection: 'row', judtifyContent: 'space-between', top: 0, right: 0 },
    },
    [theme.breakpoints.down('xs')]: {
        navItems: { display: "none", },
        hamburger: { display: "block", },
    },
}))

export const oddAvatar = {
    backgroundColor: '#ffffff',
    color: '#2A928F'
}
export const evenAvatar = {
    backgroundColor: '#2A928F',
}
export const bouncingLogo = { width: "100%", height: "100%", borderRadius: "50%", marginLeft: "100px" }
export const modalContainerStyle = { maxWidth: "80%", margin: "5rem auto", display: "flex", alignItems: "center", justifyContent: "center" }
export let optionAvatarStyle ={};
export const handleChoiceStyle = (item, review, answer, userChoice) => {
    let backgroundColor;
    if (!review) {
        backgroundColor = (userChoice === item) ? theme.palette.primary.main : theme.palette.secondary.main
    } else {
        backgroundColor = ((userChoice === item) ? theme.palette.red.main : answer === item ? theme.palette.green.main : theme.palette.secondary.main) 
    }
    optionAvatarStyle = { width: 24, height: 24, fontSize: 12 }
    return {
        fontSize: "12px",
        display: "block",
        backgroundColor,
        color: '#fff',
        cursor: "pointer",
        textAlign: "center"
    }
}

