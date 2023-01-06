import { useState, useEffect } from 'react'
import { fetchSubjects, fetchYears } from '../api'

const useTestParams = () => {
    const [testParams, setTestParams] = useState({ subject: '', year: '', examType: 'utme' })
    const [subjects, setSubjects] = useState([])
    const [years, setYears] = useState([])
    const { subject, year } = testParams

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchSubjects()
            if (data) {
                const subjects = data && Object.values(data)
                console.log(subjects)
                setSubjects(subjects)
            }
            return
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchYears(subject)
            if (subject && data.length > 0) {
                setYears(data.map((item) => item.examyear))
            }
            return
        }
        subject && fetchData()
    }, [subject, year])
    return { testParams, setTestParams, subjects, years }
}

export default useTestParams
