import React, { useState } from 'react'
import { CardContent, Card } from '@material-ui/core'
import { LeftBtn, QuestionBody, Options, QuestionNavigations, Timer } from '..'
import { useStyles } from '../../styles'
import { useTimer } from '../../hooks'

const QuestionCard = ({ handleOpen, questions, setQuestions, review, testStart, setTestStart }) => {
    const [questionIndex, setQuestionIndex] = useState(0)
    const currentQuestion = questions[questionIndex]
    const classes = useStyles()
    const { timer } = useTimer(testStart)

    const handleChoice = (e) => {
        setQuestions((prevState) => prevState.map((item) => {
            return (item.number === questionIndex + 1) ? { ...item, userChoice: e.target.id } : item
        }))
    }
    const handleSubmit = () => {
        handleOpen(true)
        setTestStart(false)
    }
    return (
        <Card elevation={3} style={{ padding: "1rem" }}>
            {
                currentQuestion &&
                <React.Fragment>
                    <CardContent >
                        {!review && <Timer timer={timer} />}
                        <div className={classes.my}>
                            <QuestionBody {...currentQuestion} questionIndex={questionIndex} review={review} />
                            <Options {...currentQuestion} handleChoice={handleChoice} review={review} />
                        </div>
                    </CardContent>
                    <QuestionNavigations questions={questions} size={questions.length}
                        setQuestionIndex={setQuestionIndex} questionIndex={questionIndex} review={review} />
                    {review
                        ? <LeftBtn btnTxt="Go Back to Dashboard" link="/" />
                        : <LeftBtn handleClick={handleSubmit} btnTxt="Finish and Submit" />
                    }
                </React.Fragment>
            }
        </Card>
    )
}

export default QuestionCard