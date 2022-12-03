import React, { useState, memo, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Paper, Card } from '@material-ui/core'
import { useStyles } from '../styles'
import {
    DashBoardHeader,
    LeftBtn, ModalComponent, TestParams
} from '../components'

const DashBoardBody = React.lazy(() => import('../components/DashBoard/DashBoardBody'))

const Dashboard = memo(({ student, testParams, setTestParams, years, subjects, setTestStart }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const paramProps = { testParams, setTestParams, years, subjects }
    useEffect(() => {
        console.log(DashBoardBody)
    }, [])
    return (
        <div className={classes.mc}>
            <Paper className={classes.paperStyle}>
                <Card elevation={3}>
                    <DashBoardHeader student={student} />
                    <Suspense fallback={<i>Fetching Dashboard</i>}>
                        <DashBoardBody student={student} />
                    </Suspense>
                    <LeftBtn btnTxt="Take A Test" handleClick={handleOpen} />
                </Card>
            </Paper>
            <ModalComponent open={open} setOpen={setOpen} >
                <TestParams {...paramProps} setTestStart={setTestStart} />
            </ModalComponent>
        </div>
    )
})
Dashboard.propTypes = {
    student: PropTypes.object,
};
export default Dashboard