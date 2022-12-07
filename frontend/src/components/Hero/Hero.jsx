import { Typography, Grid } from '@material-ui/core'
import { Icon } from '../../assests'
import { welcomeText } from '../../utils'
import { LeftBtn } from '..'
import PropTypes from 'prop-types';
import { smilingGirl } from '../../assests'
import { useStyles } from '../../styles';

const Hero = ({ setOpen }) => {
    const handleOpen = () => setOpen(true);
    const classes = useStyles()
    return (
        <Grid container style={{ position: "relative" }}>
            <Grid sm={8} md={7} lg={6} item style={{ marginTop: "10rem" }}>
                <div style={{ margin: "auto", maxWidth: "500px" }}>
                    <Typography color="secondary" align="center">{welcomeText}</Typography>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <LeftBtn
                            btnTxt="Continue With Google"
                            handleClick={handleOpen}
                            Icon={Icon}
                            secondary
                        />
                    </div>
                </div>
            </Grid>
            <Grid item sm={4} md={5} lg={6} >
                <img src={smilingGirl} alt="smiling-girl"
                    width="100%"
                    height="100%"
                    className={`${classes.examBodies}`} />
            </Grid>
        </Grid>
    )
}

Hero.propTypes = {
    setOpen: PropTypes.func.isRequired,
};
export default Hero;