import React from 'react'
import DropDown from './DropDown'
const ParamsBody = ({ testParams, years, subjects, handleChange }) => {
    const { subject, year, examType } = testParams
    return (
        < React.Fragment >
            <DropDown labelName="Subject" value={subject} name="subject" handleChange={handleChange} items={subjects} />
            <DropDown labelName="Year" value={year} name="year" handleChange={handleChange} items={years} />
            <DropDown labelName="Exam Type" value={examType} name="examType" handleChange={handleChange} items={["utme"]} disabled />
        </ React.Fragment >
    )
}
export default ParamsBody;