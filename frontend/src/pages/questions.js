import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Container, Paper } from '@material-ui/core'
import { useStyles } from '../styles'
import { LeftBtn, Skeleton } from '../components'
import { ModalComponent, Results, SubmitAlert, QuestionCard } from '../components'

const Questions = ({ questions, setQuestions, testStart, setTestStart }) => {
    const classes = useStyles()
    const [submitted, setSubmitted] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [review, setReview] = useState(false);
    const attempts = questions.length && questions.filter((item) => item.userChoice)
    const wrong = questions.length && attempts?.filter((item) => item.userChoice !== item.answer)
    const notAttempted = questions.length && questions.filter((item) => !item.userChoice)
    const toReview = [...wrong, ...notAttempted]
    const correct = questions.length && attempts?.filter((item) => item.userChoice === item.answer)
    const showReview = () => {
        setReview(true);
        setShowResults(false);
        setSubmitted(false)
        toReview.length && setQuestions(toReview);
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
                        {submitted
                            ? <ModalComponent open={submitted} setOpen={setSubmitted} noClose>
                                <SubmitAlert setShowResults={setShowResults} />
                            </ModalComponent>
                            : <QuestionCard
                                questions={questions}
                                review={review}
                                setQuestions={setQuestions}
                                handleOpen={() => setSubmitted(true)}
                                testStart={testStart}
                                setTestStart={setTestStart}
                            />
                        }
                        {showResults
                            && <ModalComponent open={showResults} setOpen={() => setShowResults(false)}>
                                <Results attempts={attempts} correct={correct} wrong={wrong} showReview={showReview} toReview={toReview}/>
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
