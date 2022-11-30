import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import {
    Container, Button,
     CardContent, Paper, 
     Card, Typography,
    Grid, Modal,
    Avatar, ButtonGroup
} from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import { useStyles, theme } from '../styles'
// import {  Timer } from '../components/Question'
import { Skeleton } from '../components'
import { previousQuestion, nextQuestion } from '../utils'
import { FaTimes } from 'react-icons/fa'
import { KeyboardArrowRightOutlined, KeyboardArrowLeftOutlined } from '@material-ui/icons'


const Questions = ({ questions }) => {
    const [userQuestions, setUserQuestions] = useState([])
    const classes = useStyles()
    // const navigate = useNavigate()
    const [questionIndex, setQuestionIndex] = useState(0)
    const [open, setOpen] = useState(false);
    const [review, setReview] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const attempts = userQuestions.length && userQuestions.filter((item, index) => item.userChoice)
    const wrong = userQuestions.length && attempts?.filter((item, index) => item.userChoice !== item.answer)
    const correct = userQuestions.length && attempts?.filter((item, index) => item.userChoice === item.answer)

    const currentQuestion = !review ? (userQuestions.length && userQuestions[questionIndex]) : (wrong.length && wrong[questionIndex])
    // const { hour, minute, second } = timer
    const percentage = ((correct.length / 40) * 100).toFixed(2)

    const newQuestions = questions.length
        && questions.map((question, index) => (
            {
                ...question,
                userChoice: "",
                options: Object.keys(question.option),
                number: index + 1,
            }
        ))

    useEffect(() => {
        // if (questions.length > 0) {
        //     if (hour === 0 && minute === 0 && second === 0) {
        //         // handleSubmit(submitValues)
        //         // navigate('/results')
        //     }
        // }
        if (userQuestions.length === 0 && !review) setUserQuestions(newQuestions)
    }, [])

    const showReview = () => {
        setReview(true);
        setQuestionIndex(wrong[0])
        console.log(currentQuestion)
    }
    const { image, question, section, option, userChoice, options, answer } = currentQuestion

    const handleChoice = (e) => {
        setUserQuestions((prevState) => prevState.map((item) => {
            return (item.number === questionIndex + 1) ? { ...item, userChoice: e.target.id } : item
        }))
    }
    const size = userQuestions.length
    return (
        <div className={classes.mc} style={{ position: "relative", margin: "auto auto", marginLeft: "auto", width: "90%", maxWidth: "700px", maxHeight: "100vh", border: `3px solid ${theme.palette.primary.main}`, padding: "1rem"}}>
            {questions.length === 0 ?
                <div>
                    <Skeleton />
                    <Link to="/dashboard"><Button variant='contained' color="primary" size="small" >Go back to Dashboard</Button></Link>
                </div>
                :
                (<Paper >
                    <Container >
                        {/* <Timer timer={timer} setTimer={setTimer} /> */}
                        <Card elevation={3} style={{padding: "1rem"}}>
                            <CardContent >
                                <div className={classes.my}>
                                    <Button variant={userChoice ? 'contained' : 'text'} color="primary" disableElevation>{questionIndex + 1}.</Button><br />
                                    <i>{section && section}</i>
                                    <div className={classes.mc}>
                                        {!image ? <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit">No Image available for this question</Button> : <img src={image} alt="question" />}
                                    </div>
                                    <Typography variant="body2" color="textSecondary">
                                        {/* {parse(`${question}`)} */}
                                        {(`${question}`)}
                                    </Typography>
                                    <Grid container spacing={3} justifyContent="center" align="center">
                                        {questions.length > 0 && options?.map((item, index) => (
                                            <Grid item xs={12} sm={3} key={index}>
                                                <Avatar style={{ width: 24, height: 24, fontSize: 12, backgroundColor: (userChoice === item) ? theme.palette.primary.main : theme.palette.secondary.main }} color='primary'>{item}</Avatar>
                                                <div className={`${classes.option} ${classes.flex}`} id={item} onClick={(e) => handleChoice(e)} style={{ backgroundColor: ((review && answer === item) || userChoice === item) ? theme.palette.primary.main : theme.palette.secondary.main, color: '#fff' }}>
                                                    {option[item]}
                                                </div>
                                            </Grid>))}
                                    </Grid>
                                </div>
                            </CardContent>
                            <div className={classes.mc}>
                                <Container>
                                    <ButtonGroup className={classes.mc} color="primary" size="small">
                                        <Button onClick={() => setQuestionIndex(previousQuestion(questionIndex, size))} startIcon={<KeyboardArrowLeftOutlined />}>Previous</Button>
                                        <Button onClick={() => setQuestionIndex(nextQuestion(questionIndex, size))} endIcon={<KeyboardArrowRightOutlined />}>Next</Button>
                                    </ButtonGroup>
                                </Container>
                            </div>
                            <div className={classes.mc}>
                                <Container>
                                    <ul >
                                        {userQuestions?.map((question, index) => (<Button size="small" variant={userQuestions.length && userQuestions[index].userChoice ? "contained" : 'outlined'} color={index === questionIndex ? 'inherit' : 'secondary'} key={index} onClick={() => setQuestionIndex(index)}>{index + 1}</Button>))}
                                    </ul>
                                </Container>
                            </div>
                            <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit" onClick={() => handleOpen(true)}>Finish and Submit</Button>
                        </Card>


                        {
                            open &&
                            <Modal
                                open={open}
                                onClose={handleClose}
                                style={{ position: "fixed", height: "50vh", top: "39%", left: "50%", transform: "translate(-50%, -50%)", marginTop: '5rem', width: "90%", maxWidth: "700px", border: `3px solid ${theme.palette.primary.main}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Paper>
                                    <Container style={{ position: "relative", padding: "3rem", border: `3px solid ${theme.palette.primary.main}` }}>
                                        <Typography align="center" color="secondary">Test Submitted 🎉🎉🎉</Typography>
                                        <Button className={classes.mc} style={{ margin: "2rem" }} variant='contained' color="secondary" size="small" type="submit" onClick={() => handleOpen(true)}>Go Back To Dashboard</Button>
                                        <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit" onClick={() => setShowResults(true)} style={{ margin: "2rem" }}>See Results And Review</Button>
                                    </Container>
                                </Paper>
                            </Modal>
                        }
                        {
                            showResults &&
                            <Modal
                                open={open}
                                onClose={handleClose}
                                style={{ position: "fixed", height: "80vh", top: "39%", left: "50%", transform: "translate(-50%, -50%)", marginTop: '5rem', width: "90%", maxWidth: "700px", border: `3px solid ${theme.palette.primary.main}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Paper>
                                    <Container style={{ position: "relative", padding: "3rem", border: `3px solid ${theme.palette.primary.main}` }}>
                                        <FaTimes onClick={() => setShowResults(prevState => false)} style={{ fontSize: "1.5rem", position: "absolute", top: "0.8rem", right: "2rem", color: ` ${theme.palette.red.main}`, cursor: "pointer" }} />

                                        {[{ text: "You Attempted", msg: attempts.length }, { text: "You Failed", msg: wrong?.length }].map((item, index) => (
                                            <div className={classes.flex} key={index}> <Typography align="center" variant="body2">{item.text}: </Typography> <Button component="p" color="secondary" disableElevation>{item.msg}</Button> <Typography> Questions </Typography> </div>))}
                                        {wrong?.length !== 0 &&
                                            <div>
                                                <div className={classes.flex}>
                                                    {wrong?.map((item, index) => (<Button key={index} align="center" variant="contained" className={classes.mc} color="primary" size="small">{item.number}</Button>))}
                                                </div>
                                                <div className={`${classes.my} ${classes.flex}`}>
                                                    <Button className={classes.my} variant='contained' color="secondary" size="small" onClick={showReview}>See correct answers</Button>
                                                </div>
                                            </div>}
                                        <Typography align="right" variant="body2">You scored :
                                            <ButtonGroup className={classes.ml} color="primary" size="small" variant="contained"> <Button color="secondary" >{correct?.length}</Button> <Button color="primary" >40</Button> </ButtonGroup>
                                        </Typography>
                                        <div className={classes.my}>
                                            <Typography align="right" className={classes.mc} gutterbottom="true">  Your percentage score is : <Button variant="contained" color="primary" disableElevation size="small">{percentage}%</Button> </Typography>
                                        </div>
                                    </Container>
                                </Paper>
                            </Modal>
                        }
                    </Container>
                </Paper>)
            }
        </div>
    )
}
Questions.propTypes = {
    questionPageProps: PropTypes.object,
};
export default Questions