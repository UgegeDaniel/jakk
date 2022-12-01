import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../styles'

const QuestionBody = ({ questionIndex, section, image, question, userChoice, number}) => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <span className={classes.chipStyle} style={{
                fontSize: "12px",
                textAlign: "center",
                color: userChoice ? "#fff" : '#000',
                backgroundColor: userChoice ? "#324B4A" : '#fff',
                border: "2px solid #324B4A"
            }}>{number}.</span><br />
            <i>{section && section}</i>
            <div className={classes.mc}>
                {!image
                    ? <span className={classes.chipStyle} style={{ fontSize: "14px", fontStyle: "italic", backgroundColor: "#FF6961" }}>
                        No Image available for this question</span>
                    : <img src={image} alt="question" />}
            </div>
            <Typography variant="body2" color="textSecondary">
                {/* {parse(`${question}`)} */}
                {(`${question}`)}
            </Typography>
        </React.Fragment>
    )
}
export default QuestionBody