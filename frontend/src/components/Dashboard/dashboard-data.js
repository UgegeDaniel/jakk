// import moment from 'moment'
import { theme } from '../../styles'


const getDateFormat = (dateToFormat) => {
    // const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const month = new Date(dateToFormat).getMonth() + 1
    const date = new Date(dateToFormat).getDate()
    return `${date}/${month}`
}
export const getData = (dataToDisplay = [], currentSubjectData) => {
    return {
        // labels: dataToDisplay.map((data) => moment(data?.timeTaken).startOf('minute').fromNow()),
        labels: dataToDisplay.map((data) => getDateFormat(data?.timeTaken)),
        datasets: [
            {
                label: dataToDisplay?.length > 0 ? `Scores (%) in ${currentSubjectData.toUpperCase()}` : '',
                data: dataToDisplay.map((data) => data?.scores),
                fill: false,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.secondary.main,
                borderWidth: 2,
            },
        ]
    }
};

export const options = {
    title: { display: true, text: 'Your Scores', fontSize: 25 },
    legend: { display: true, position: 'top' }
}

export const getAverage = (student) => {
    if (!student) {
        return
    } else {
        const { history } = student;
        const scores = history.map((data) => parseInt(data?.scores))
        const size = scores.length
        if (history.length === 0) {
            return 0
        } else {
            const total = (scores) => {
                if (scores.length === 0) {
                    return
                }
                const total = scores.reduce((total, score) => {
                    total += score;
                    return total
                }, 0)
                return total
            }
            const averageScore = (total(scores) / size).toFixed(2)
            return { averageScore, scores }
        }
    }

}