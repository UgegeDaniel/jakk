import React from 'react'
import { Typography } from '@material-ui/core'
import ParamsBody from './ParamsBody'
import ParamsFooter from './ParamsFooter'
const TestParams = ({testParams, setTestParams, years, subjects, setTestStart}) => {
    const handleChange = (e) => {
        setTestParams({ ...testParams, [e.target.name]: e.target.value })
        setTestStart(true)
    }

    return (
        <React.Fragment>
            <Typography color="secondary" variant="body1" gutterBottom fontSize="2rem" component="i">
                Please pick a subject and examination year
            </Typography>
            <ParamsBody testParams={testParams} years={years} subjects={subjects} handleChange={handleChange} />
            <div>
                <ParamsFooter {...testParams}/>
            </div>
        </React.Fragment>
    )
}
export default TestParams