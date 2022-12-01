import React from 'react'
import { Container, Button, ButtonGroup } from '@material-ui/core';
import { useStyles } from '../../styles'
import { KeyboardArrowRightOutlined, KeyboardArrowLeftOutlined } from '@material-ui/icons'
import { previousQuestion, nextQuestion } from '../../utils'

const QuestionNavigations = ({ setQuestionIndex, questionIndex, size, questions, review }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            {!review && <div className={classes.mc}>
                <Container>
                    <ButtonGroup className={classes.mc} color="primary" size="small">
                        <Button onClick={() => setQuestionIndex(previousQuestion(questionIndex, size))} startIcon={<KeyboardArrowLeftOutlined />}>Previous</Button>
                        <Button onClick={() => setQuestionIndex(nextQuestion(questionIndex, size))} endIcon={<KeyboardArrowRightOutlined />}>Next</Button>
                    </ButtonGroup>
                </Container>
            </div>}

            <Container>
                <ul style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)" }}>
                    {questions?.map((question, index) => (
                        <span className={classes.chipStyle}
                            key={index}
                            style={{
                                fontSize: "12px",
                                textAlign: "center",
                                color: "#000",
                                backgroundColor: index === questionIndex ? '#77DD77' : (question.userChoice ? "#2A928F" : '#fff'),
                                border: "2px solid #2A928F"
                            }}
                            onClick={() => setQuestionIndex(index)}
                        >
                            {question.number}
                        </span>
                    ))}
                </ul>
            </Container>
        </React.Fragment >
    )
}

export default QuestionNavigations;