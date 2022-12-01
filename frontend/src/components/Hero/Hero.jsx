import { Typography } from '@material-ui/core'
import { Icon } from '../../assests'
import { welcomeText } from '../../utils'
import { LeftBtn } from '..'
import PropTypes from 'prop-types';

const Hero = ({ setOpen }) => {
    const handleOpen = () => setOpen(true);
    return (
        <div style={{ margin: "5rem auto", maxWidth: "800px" }}>
            <Typography color="secondary" align="center">{welcomeText}</Typography>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <LeftBtn btnTxt="Continue With Google" handleClick={handleOpen} Icon={Icon} />
            </div>
        </div>
    )
}

Hero.propTypes = {
    setOpen: PropTypes.func.isRequired,
};
export default Hero;