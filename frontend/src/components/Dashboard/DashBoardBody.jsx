import { useState } from 'react';
import PropTypes from 'prop-types';
import { Line, Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { CardContent } from '@material-ui/core'
import { useStyles } from '../../styles'
import { getData, options, getAverage } from './dashboard-data'
import { ItalisizedTypography } from '../'

const DashBoardBody = ({ student }) => {
    const [barChart, setBarChart] = useState(false)
    const classes = useStyles();
    const history = student ? student.history : [];  //get student history
    const subjectsTaken = student ? Array.from(new Set(history.map((data) => data.subject))) : [] //get subjects in the history array  
    const [currentSubjectData, setCurrentSubjectData] = useState(subjectsTaken[0]) //choose subject data to display 
    const dataToDisplay = history?.filter((item) => item.subject === currentSubjectData) //filter data by subject on request 
    const data = getData(dataToDisplay, currentSubjectData) //display data based on subject selected
    const averageScore = student && getAverage(student).averageScore //calculate average score
    const chipColor = (item) => item === currentSubjectData ? '#324B4A' : '#2A928F' //style for current subject

    return (
        < CardContent >
            <ItalisizedTypography>
                You have taken
                <span className={classes.chipStyle}>{student ? history.length : 0}</span>
                Test(s).
            </ItalisizedTypography>
            <div style={{display:"flex", alignItems: "center", justifyContent: "center", margin: "1rem auto" }}>{history.length !== 0 && subjectsTaken.map((item, index) =>
                <span key={index} className={classes.chipStyle} 
                style={{ color: chipColor(item), backgroundColor: "#fff", fontSize: "14px", border: `2px solid ${chipColor(item)}` }}
                    onClick={(e) => setCurrentSubjectData(e.target.textContent)}>
                    {item}
                </span>
            )}
            </div>
            <ItalisizedTypography>Would you like a
                <span className={classes.chipStyle} onClick={(e) => setBarChart(!barChart)}>
                    {barChart ? 'Line Chart' : 'Bar Chart'}
                </span>
                instaed ?
            </ItalisizedTypography>
            {barChart && <Bar data={data} className={classes.chart} options={options} />}
            {!barChart && <Line data={data} className={classes.chart} options={options} />}
            <ItalisizedTypography>
                You have an overall average of
                <span className={classes.chipStyle}>
                    {averageScore ? averageScore : 0}
                </span>
                % per test
            </ItalisizedTypography>
        </CardContent >
    )
}

DashBoardBody.propTypes = {
    student: PropTypes.object,
};
export default DashBoardBody