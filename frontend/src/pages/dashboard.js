import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Paper, Card } from '@material-ui/core'
import { useStyles } from '../styles'
import {
    DashBoardHeader,
    DashBoardBody,
    LeftBtn,
    ModalComponent,
    TestParams
} from '../components'

const Dashboard = memo(({ student }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <div className={classes.mc}>
            <Paper className={classes.paperStyle}>
                <Card elevation={3}>
                    <DashBoardHeader student={student} />
                    <DashBoardBody />
                    <LeftBtn btnTxt="Take A Test" handleClick={handleOpen} />
                </Card>
            </Paper>
            <ModalComponent open={open} setOpen={setOpen} >
                <TestParams />
            </ModalComponent>
        </div>
    )
})
Dashboard.propTypes = {
    student: PropTypes.object,
};
export default Dashboard