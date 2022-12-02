import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Container, Button, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from '../styles'
// import {  Timer } from '../components/Question'
import { LeftBtn, Skeleton } from '../components'
import { ModalComponent, Results, SubmitAlert, QuestionCard } from '../components'

const Questions = ({ questions, setQuestions }) => {
    const classes = useStyles()
    const [submitted, setSubmitted] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [review, setReview] = useState(false);
    // const { hour, minute, second } = timer
    const attempts = questions.length && questions.filter((item) => item.userChoice)
    const wrong = questions.length && attempts?.filter((item) => item.userChoice !== item.answer)
    const correct = questions.length && attempts?.filter((item) => item.userChoice === item.answer)
    const showReview = () => {
        setReview(true);
        setShowResults(false);
        setSubmitted(false)
        wrong.length && setQuestions(wrong);
    }

    return (
        <div className={classes.mc}>
            {questions.length === 0 ?
                <div>
                    <Skeleton />
                    <LeftBtn btnTxt="Go back to Dashboard" link="/dashboard" />
                </div>
                :
                (<Paper >
                    <Container >
                        {/* <Timer timer={timer} setTimer={setTimer} /> */}
                        {submitted
                            ? <ModalComponent open={submitted} setOpen={setSubmitted}>
                                <SubmitAlert setShowResults={setShowResults} />
                            </ModalComponent>
                            : <QuestionCard questions={questions} review={review} setQuestions={setQuestions} handleOpen={() => setSubmitted(true)} />
                        }
                        {showResults
                            && <ModalComponent open={showResults} setOpen={() => setShowResults(false)}>
                                <Results attempts={attempts} correct={correct} wrong={wrong} showReview={showReview} />
                            </ModalComponent>}
                    </Container>
                </Paper>)
            }
        </div>
    )
}
Questions.propTypes = {
    questions: PropTypes.array.isRequired,
};
export default Questions;
