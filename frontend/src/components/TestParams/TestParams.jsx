import React from 'react'
import { Typography } from '@material-ui/core'
import { useTestParams } from '../../hooks'
import ParamsBody from './ParamsBody'
import ParamsFooter from './ParamsFooter'
const TestParams = () => {
    const { testParams, setTestParams, subjects, years } = useTestParams()
    const handleChange = (e) => {
        setTestParams({ ...testParams, [e.target.name]: e.target.value })
        console.log(e.target)
    }

    return (
        <React.Fragment>
            <Typography color="secondary" variant="body1" gutterBottom fontSize="2rem" component="i">
                Please pick a subject and examination year
            </Typography>
            <ParamsBody testParams={testParams} years={years} subjects={subjects} handleChange={handleChange} />
            <div>
                <ParamsFooter />
            </div>
        </React.Fragment>
    )
}
export default TestParams