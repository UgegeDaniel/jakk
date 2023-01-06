import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Btn, ItalisizedTypography } from '../'
import { useStyles } from '../../styles'

const ParamsFooter = ({ subject, examType, year, setNotification }) => {
    const classes = useStyles();
    const navigate = useNavigate()
    const handleClick= () =>{
        if(subject && year){
            navigate('/questions')
            return
        }
        if(!subject || !year){
            setNotification({show: true, msg: "Please pick a subject and year", type: "danger"})
            return
        }
    }
    return (
        <React.Fragment>
            <div style={{ marginTop: "0.5rem", display: "flex" }}>
                <ItalisizedTypography >You have chosen to take a test in
                    <span className={classes.chipStyle}>{subject}</span> of
                    <span className={classes.chipStyle}>{examType}</span>Examinations Year
                    <span className={classes.chipStyle}>{year}</span>
                </ItalisizedTypography>
            </div>
            <ItalisizedTypography>Allotted Time :
                <span className={classes.chipStyle}> 2 hours</span>
            </ItalisizedTypography>
            <Btn btnTxt="Take Test" handleClick={handleClick}/>
        </React.Fragment>
    )
}
export default React.memo(ParamsFooter)