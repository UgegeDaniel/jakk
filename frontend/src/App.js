import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppHeader, Notification } from './components'
import { Home, Dashboard, Questions } from './pages'
import { useQuestions, useTestParams, useStudent } from './hooks'

const App = () => {
  const [notification, setNotification] = useState({ show: false, msg: '', type: 'danger' })
  const { student, setStudent } = useStudent();
  const { testParams, setTestParams, subjects, years } = useTestParams()
  const { questions, setQuestions } = useQuestions(testParams)
  const [testStart, setTestStart] = useState(false)
  useEffect(() => {
    questions.length && setTestStart(true)
  }, [questions.length])

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", minHeight: "100vh" }}>
      <AppHeader setStudent={setStudent} student={student} />
      {notification.show &&
        <Notification notification={notification} setNotification={setNotification} />}
      <Routes>
        <Route
          exact path="/"
          element={
            !student ?
              <Home
                setStudent={setStudent}
                setNotification={setNotification} />
              : <Navigate to="/dashboard" />
          } />
        <Route
          exact path="/dashboard"
          element={
            student ?
              <Dashboard
                student={student}
                testParams={testParams}
                setTestParams={setTestParams}
                years={years}
                subjects={subjects}
                setTestStart={setTestStart}
                setNotification={setNotification}
              />
              : <Navigate to="/" />
          } />
        <Route
          exact path="/questions"
          element={
            questions ?
              <Questions
                questions={questions}
                setQuestions={setQuestions}
                testStart={testStart}
                setTestStart={setTestStart}
              />
              : <Navigate to="/dashboard" />
          } />
      </Routes>
    </div>
  )
}
export default App;