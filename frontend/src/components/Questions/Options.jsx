import { Grid, Avatar } from '@material-ui/core'
import { useStyles, handleChoiceStyle, optionAvatarStyle } from '../../styles'

const Options = ({ options, userChoice, review, answer, handleChoice, option }) => {
    const classes = useStyles()
    return (
    <Grid container spacing={3} justifyContent="center" align="center">
        { options?.map((item, index) => (
            <Grid item xs={6} sm={3} key={index}>
                <Avatar style={optionAvatarStyle(item, userChoice, review)} color='primary'>{item.toUpperCase()}</Avatar>
                <span
                    className={classes.chipStyle}
                    style={handleChoiceStyle(item, review, answer, userChoice)}
                    id={item}
                    onClick={(e) => handleChoice(e)}
                >
                    {option[item]}
                </span>
            </Grid>))}
    </Grid>
    )
}

export default Options