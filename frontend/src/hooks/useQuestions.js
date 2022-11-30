  //import { fetchQuestions } from './api'

  //TEST STARTED
  // useEffect(() => {
  //   const { subject, year, examtype } = testParams
  //   if (subject && year) {
  //     const fetchData = async () => {
  //       const data = await fetchQuestions(subject, year, examtype)
  //       if (data?.length > 0) {
  //         // setQuestions(data)
  //         setReviewQuestions(data)
  //         setTimer({ hour: 2, minute: 0, second: 0 })
  //       }
  //       else {
  //         return
  //       }
  //     }
  //     fetchData()
  //   }
  // }, [testParams])

  //TEST CONCLUDED
  // useEffect(()=>{
  //   if(submitted){
  //     const testSubmitted = () => {
  //       const login = JSON.parse(localStorage.getItem('student'))
  //       if (login) {
  //         setStudent(login)
  //       }
  //       localStorage.removeItem('timer')
  //       // setQuestions([])
  //       setTestParams({ subject: '', year: '', examtype: 'utme' })
  //       setTimer({ hour: 0, minute: 0, second: 0 })
  //       setSubmitted(false)
  //     }
  //     testSubmitted()
  //   }
  // },[submitted, timer])