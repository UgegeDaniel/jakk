import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Paper, Card, CardActions, CardHeader, IconButton, Avatar, Chip, CardContent, Typography } from '@material-ui/core'
import { FaUser } from 'react-icons/fa';
import { useStyles, theme } from '../components/styles'
import { Header, HistoryChart } from '../components'
import { deepPurple } from '@material-ui/core/colors';
import { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { getData, options, getAverage } from './dashboard-data'

const Dashboard = ({ student }) => {
    const classes = useStyles();
    const history = student ? student.history : [];
    const subjectsTaken =  student ? Array.from(new Set(history.map((data) => data.subject))) : []
    const [currentSubjectData, setCurrentSubjectData] = useState(subjectsTaken[0])
    const [barChart, setBarChart] = useState(false)
    const dataToDisplay = history?.filter((item) => item.subject === currentSubjectData)
    const data = getData(dataToDisplay, currentSubjectData, theme)
    const averageScore = student && getAverage(student).averageScore
    return (
        <div className={classes.mc}>
            <Paper style={{ position: "relative", margin: "auto auto", marginLeft: "auto", width: "90%", maxWidth: "700px", maxHeight: "100vh", overflow: "hidden", border: `3px solid ${theme.palette.primary.main}` }}>
                <Card elevation={3}>
                    <CardHeader
                        action={
                            <IconButton>
                                <Avatar style={{ backgroundColor: deepPurple[500] }}>{student?.userName.charAt(0)}</Avatar>
                            </IconButton>
                        }
                        title={<Chip style={{ color: "#fff" }} avatar={<Avatar>{<FaUser />}</Avatar>} label={student?.userName} color="primary" />}
                        subheader={<Chip style={{ color: "#fff", marginTop: "5px" }} avatar={<Avatar>@</Avatar>} label={student?.email} color="secondary" />} />
                    < CardContent >
                        <Typography color="primary" component="i"> You have taken<span style={{margin: "0 0.5rem"}}>{student ? history.length : 0}</span>Test(s).</Typography>
                        <div className={classes.flex}>{history.length !== 0 && subjectsTaken.map((item, index) =>
                            <Button key={index} variant='contained' color={item === currentSubjectData ? 'primary' : 'secondary'} size="small" onClick={(e) => setCurrentSubjectData(e.target.textContent)}>{item}</Button>
                        )}
                        </div>
                        <div className={classes.mc}>
                            <div className={classes.flex}>
                                <Typography>Would you like a </Typography>
                                <Button variant='outlined' color={barChart ? 'primary' : 'secondary'} size="small" onClick={(e) => setBarChart(!barChart)}>{barChart ? 'Line Chart' : 'Bar Chart'}</Button>
                                <Typography>instaed ? </Typography>
                            </div>
                            {barChart && <Bar data={data} className={classes.chart} options={options} />}
                            {!barChart && <Line data={data} className={classes.chart} options={options} />}
                        </div>
                        <Typography color="primary" component="i">
                            You have an overall average of <span style={{margin: "0 0.5rem"}} > {averageScore ? averageScore : 0} </span>% per test
                        </Typography>
                    </CardContent >                    
                    <CardActions>
                        <Link to="/params"> <Button className={classes.mc} variant='contained' color="secondary" size="small"> Take A Test </Button> </Link>
                    </CardActions>
                </Card>
            </Paper>
        </div>
    )
}
Dashboard.propTypes = {
    student: PropTypes.object,
};
export default Dashboard