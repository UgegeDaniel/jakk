import PropTypes from 'prop-types';
import { AppBar, Toolbar, Avatar, Fab } from '@material-ui/core'
import { FaDoorOpen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useStyles, evenAvatar, oddAvatar } from '../../styles'
import { jamb, waec, neco } from '../../assests'
import { logout } from '../../api/auth'
import {LeftBtn} from "../"

const AppHeader = ({ setStudent, student }) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar color="primary" position="relative">
                <Toolbar className={classes.header}>
                    <Link to="/">
                        <div className={classes.logoContainer}>
                            {"J A K K".split(" ").map((letter, index) => (<Avatar style={index % 2 === 0 ? evenAvatar : oddAvatar} key={index}>{letter}</Avatar>))}
                        </div>
                    </Link>
                    <div className={`${classes.logoContainer} ${classes.examBodies}`}>
                        {[jamb, waec, neco].map((logo, index) => (<div className={classes.logo} key={index}><img className={classes.logoStyle} src={logo} alt='exam body logo' /></div>))}
                    </div>
                    {student && <LeftBtn btnTxt="Log out" handleClick={() => logout(setStudent)} Icon={FaDoorOpen} />}
                </Toolbar>
            </AppBar>
        </div >
    )
}
AppHeader.propTypes = {
    setStudent: PropTypes.func,
    student: PropTypes.object,
};
export default AppHeader

