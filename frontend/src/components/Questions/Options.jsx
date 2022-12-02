import { Grid, Avatar } from '@material-ui/core'
import { useStyles, handleChoiceStyle, optionAvatarStyle } from '../../styles'

const Options = ({ options, userChoice, review, answer, handleChoice, option }) => {
    const returnClick = () => {
        return
    }
    const classes = useStyles()
    return (
        <Grid container spacing={3} justifyContent="center" alignItems="center">
            {options?.map((item, index) => (
                <Grid item xs={6} sm={4} key={index}>
                    <div style={{ display: "flex", justifyContent:"center", alignItems:"center" }}>
                        <Avatar style={optionAvatarStyle} color='primary'>{item.toUpperCase()}</Avatar>
                        <span
                            className={classes.chipStyle}
                            style={handleChoiceStyle(item, review, answer, userChoice)}
                            id={item}
                            onClick={review ? returnClick : (e) => handleChoice(e)}
                        >
                            {option[item]}
                        </span>
                    </div>
                </Grid>))}
        </Grid>
    )
}

export default Options