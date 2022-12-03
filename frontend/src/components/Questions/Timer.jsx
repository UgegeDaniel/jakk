import PropTypes from 'prop-types';
import { useStyles } from '../../styles'

const Timer = ({ timer }) => {
    const classes = useStyles();
    const { hour, minute, second } = timer
    const Time = ({ hms }) => <span className={classes.chipStyle} style={{ height: "10px", width: "10px", borderRadius: "50%", padding: "0.9rem 0.75rem", fontSize: "16px",  display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{hms} </span>

    return (
        <div style={{marginRight: "auto"}}>
            <Time hms={hour}/>
            <Time hms={minute}/>
            <Time hms={second}/>
        </div>
    )
}
Timer.propTypes = {
    timer: PropTypes.object,
};
export default Timer