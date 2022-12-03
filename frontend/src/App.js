import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppHeader, Notification } from './components'
import { Home, Dashboard, Questions } from './pages'
import { useQuestions, useTestParams, useTimer, useStudent } from './hooks'

const App = () => {
  const [notification, setNotification] = useState({ show: false, msg: '', type: 'danger' })
  const { student, setStudent } = useStudent();
  const [testStart, setTestStart] = useState(true)
  const { testParams, setTestParams, subjects, years } = useTestParams()
  const { timer, setTimer } = useTimer(testStart, setTestStart)
  const { questions, setQuestions } = useQuestions(testParams, setTestStart)
  const paramProps = { testParams, setTestParams, years, subjects }
  const onTime = useCallback(() => !timer.hour && setTimer({ hour: 2, minute: 0, second: 0 }), [setTimer, timer.hour])
  useEffect(() => {
    console.log(timer)
  }, [timer])

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", minHeight: "100vh" }}>
      <AppHeader setStudent={setStudent} student={student} />
      {notification.show &&
        <Notification notification={notification} setNotification={setNotification} />}
      <Routes>
        <Route exact path="/" element={!student
          ? <Home setStudent={setStudent} setNotification={setNotification} />
          : <Navigate to='/dashboard' />} />
        <Route exact path="/dashboard" element={student
          ? <Dashboard student={student} {...paramProps} />
          : <Navigate to='/' />
        } />
        <Route exact path="/questions"
          element={student
            ? <Questions questions={questions} setQuestions={setQuestions} timer={timer} onTime={onTime} />
            : <Navigate to='/' />
          } />
      </Routes>
    </div>
  )
}
export default App;