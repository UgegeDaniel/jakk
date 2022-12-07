import { useState, useEffect } from 'react'
import { fetchQuestions } from '../api'
import { dummyData as dummyQuestions } from '../dummyData';

const useQuestions = (testParams) => {
  const [questions, setQuestions] = useState([]);
  const { subject, year, examtype } = testParams
  useEffect(() => {
    // const fetchData = async () => {
      // const data = await fetchQuestions(subject, year, examtype)
      // if (data?.length > 0) {
      //   setQuestions(dummyQuestions.map((question, index) => (
      //     {
      //       ...question,
      //       userChoice: "",
      //       options: Object.keys(question.option),
      //       number: index + 1,
      //     }
      //   )));
      // }
      // else {
      //   return
      // }
    // }
    // (subject && year) && fetchData()
    setQuestions(dummyQuestions.map((question, index) => (
      {
        ...question,
        userChoice: "",
        options: Object.keys(question.option),
        number: index + 1,
      }
    )));
  }, [subject, year, examtype])
  return {
    questions,
    setQuestions
  }
}
export default useQuestions

