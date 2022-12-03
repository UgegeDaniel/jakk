import React from 'react'
import { ItalisizedTypography, LeftBtn } from '..';
import { useStyles } from '../../styles'

const Results = ({attempts, correct, wrong, showReview, toReview}) => {
    const classes = useStyles()
    const ResultText = ({ text, spanContent, showQuestions }) => (
        <div style={{ margin: "0.5rem auto", marginBottom: "1rem" }}>
            <ItalisizedTypography>
                {text}
                <span className={classes.chipStyle} style={{ marginLeft: "1rem" }}>{spanContent} {showQuestions && "Questions"}</span>
            </ItalisizedTypography>
        </div>
    )
    return(
        <React.Fragment>
        <ResultText text="You Attempted: " spanContent={attempts?.length} showQuestions />
        <ResultText text="You Failed: " spanContent={wrong?.length} showQuestions />
        <ResultText text="You Scored: " spanContent={`${correct?.length} / 40`} />
        <ResultText text="Your percentage score is : " spanContent={`${((correct?.length / 40) * 100).toFixed(2)} %`} />
        {
            toReview?.length !== 0 &&
            <div style={{ border: "2px solid #2A928F", borderRadius: "10px", padding: "0.5rem",  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <ItalisizedTypography align="center"> Review the following Questions: </ItalisizedTypography>
                <ul style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", marginRight: "1rem", }}>
                    {toReview?.map((item, index) => (
                        <span key={index} className={classes.chipStyle} style={{ textAlign: "center", fontSize: "12px", fontStyle: "italic" }}>{item.number}</span>
                    ))}
                </ul>
                <LeftBtn btnTxt="See correct answers" handleClick={showReview} />
            </div>
        }
    </React.Fragment>
    )
}
export default Results;