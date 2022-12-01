import React from 'react';
import { LeftBtn, ItalisizedTypography } from '../'
import { useStyles } from '../../styles'
import {useNavigate} from 'react-router-dom'

const ParamsFooter = ({subject, examType, year}) => {
    const classes = useStyles();
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <div style={{marginTop: "0.5rem", display:"flex"}}>
                <ItalisizedTypography >You have chosen to take a test in
                    <span className={classes.chipStyle}>{subject}</span> of
                    <span className={classes.chipStyle}>{examType}</span>Examinations Year
                    <span className={classes.chipStyle}>{year}</span>
                </ItalisizedTypography>
            </div>
            <ItalisizedTypography>Allotted Time :
                <span className={classes.chipStyle}> 2 hours
                </span>
            </ItalisizedTypography>
            <LeftBtn btnTxt="Take Test" onClick={()=> navigate("/questions")}/>
        </React.Fragment>
    )
}
export default ParamsFooter