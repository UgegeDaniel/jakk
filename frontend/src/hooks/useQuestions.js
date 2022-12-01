import { useState, useEffect } from 'react'
import { fetchQuestions } from '../api'

const useQuestions = ({ testParams, setTimer }) => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuestions(testParams.subject, testParams.year, testParams.examtype)
      if (data?.length > 0) {
        setTimer({ hour: 2, minute: 0, second: 0 })
        data.map((question, index) => (
          {
            ...question,
            userChoice: "",
            options: Object.keys(question.option),
            number: index + 1,
          }
        ))
      }
      else {
        return
      }
    }
    testParams && fetchData()
  }, [testParams, setTimer])
  return {
    questions,
    setQuestions
  }
}
export default useQuestions

