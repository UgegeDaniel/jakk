import React from 'react'
import { Typography } from '@material-ui/core';
import { Btn } from '..'
const SubmitAlert = ({ setShowResults }) => (
    <React.Fragment>
        <Typography align="center" color="secondary">Test Submitted 🎉🎉🎉</Typography>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Btn btnTxt="Dashboard" link="/dashboard"/>
            <Btn handleClick={() => setShowResults(true)} btnTxt="Results" secondary />
        </div>
    </React.Fragment>
)

export default SubmitAlert