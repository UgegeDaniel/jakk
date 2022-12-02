import React from 'react'
import { Typography } from '@material-ui/core'
import parse from 'html-react-parser';
import { useStyles } from '../../styles'

const QuestionBody = ({ section, image, question, userChoice, number}) => {
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
            <i style={{margin: "0.5rem auto", fontSize: "18px", display: "block", textAlign: "center"}}>{section && section}</i>
            <div>
                {!image
                    ? <span className={classes.chipStyle} style={{ fontSize: "14px", fontStyle: "italic", backgroundColor: "#FF6961", margin: "0.5rem auto",}}>
                        No Image available for this question
                        </span>
                    : <img src={image} alt="question" />}
            </div>
            <Typography variant="body2" color="textSecondary" style={{marginTop: "0.5rem"}}>
                {parse(`${question}`)}
            </Typography>
        </React.Fragment>
    )
}
export default QuestionBody