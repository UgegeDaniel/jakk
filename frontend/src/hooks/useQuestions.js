import { useState, useEffect } from 'react'
import { fetchQuestions } from '../api'
import { dummyData as dummyQuestions } from '../dummyData';

const useQuestions = (testParams, setTestStart) => {
  const [questions, setQuestions] = useState([]);
  const { subject, year, examtype } = testParams
  useEffect(() => {
    setQuestions(dummyQuestions.map((question, index) => (
      {
        ...question,
        userChoice: "",
        options: Object.keys(question.option),
        number: index + 1,
      }
    )));
    setTestStart(true)
    // const fetchData = async () => {
    //   const data = await fetchQuestions(subject, year, examtype)
    //   console.log({ data })
    //   // if (data?.length > 0) {
    //     setTimer({ hour: 2, minute: 0, second: 0 })

    // }
    // else {
    //   return
    // }
    // }
    // year && fetchData()
    // }, [subject, year, examtype, setTimer])
  }, [setTestStart])
  return {
    questions,
    setQuestions
  }
}
export default useQuestions

