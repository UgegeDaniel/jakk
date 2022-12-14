import React, { useState, memo, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Paper, Card } from '@material-ui/core'
import { useStyles } from '../styles'
import {
    DashBoardHeader,
    Btn, ModalComponent, TestParams
} from '../components'

const DashBoardBody = React.lazy(() => import('../components/DashBoard/DashBoardBody'))

const Dashboard = memo(({ student, testParams, setTestParams, years, subjects, setTestStart, setNotification }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const paramProps = { testParams, setTestParams, years, subjects }
    return (
        <div className={classes.mc}>
            <Paper className={classes.paperStyle}>
                <Card elevation={3}>
                    <DashBoardHeader student={student} />
                    <Suspense fallback={<i>Fetching Dashboard</i>}>
                        <DashBoardBody student={student} />
                    </Suspense>
                    <Btn btnTxt="Take A Test" handleClick={handleOpen} />
                </Card>
            </Paper>
            <ModalComponent open={open} setOpen={setOpen} >
                <TestParams
                    {...paramProps}
                    setTestStart={setTestStart}
                    setNotification={setNotification}
                />
            </ModalComponent>
        </div>
    )
})
Dashboard.propTypes = {
    student: PropTypes.object,
};
export default Dashboard