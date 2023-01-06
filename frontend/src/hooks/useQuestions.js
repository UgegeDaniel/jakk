import { useState, useEffect } from 'react'
import { fetchQuestions } from '../api'

const useQuestions = (testParams) => {
  const [questions, setQuestions] = useState([]);
  const { subject, year, examtype } = testParams
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuestions(subject, year)
      console.log({ data })
      if (data?.length > 0) {
        setQuestions(data.map((question, index) => (
          {
            ...question,
            userChoice: "",
            options: Object.keys(question.option),
            number: index + 1,
          }
        )));
        return
      }
    }
    fetchData()
  }, [subject, year, examtype])
  return {
    questions,
    setQuestions
  }
}
export default useQuestions

