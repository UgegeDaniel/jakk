import React from 'react';
import { Typography } from '@material-ui/core';
import { LeftBtn } from '../'
import { useStyles } from '../../styles'

const ParamsFooter = ({subject, examType, year}) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div>
                <Typography variant="body2" style={{ margin: "0.5rem auto", dispaly: "block" }} component="i">You have chosen to take a test in
                    <span className={classes.chipStyle}>{subject}</span> of
                    <span className={classes.chipStyle}>{examType}</span>Examinations Year
                    <span className={classes.chipStyle}>{year}</span>
                </Typography>
            </div>
            <Typography variant="body2" style={{ margin: "0.75rem auto" }} component="i">Allotted Time :
                <span className={classes.chipStyle}> 2 hours
                </span>
            </Typography>
            <LeftBtn btnTxt="Take Test" />
        </React.Fragment>
    )
}
export default ParamsFooter