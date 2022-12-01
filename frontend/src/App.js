import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppHeader, Notification } from './components'
import { Home, Dashboard, Questions } from './pages'
import { useQuestions, useTestParams, useTimer } from './hooks'

const App = () => {
  const [student, setStudent] = useState(null)
  const [notification, setNotification] = useState({ show: false, msg: '', type: 'danger' })
  const { testParams, setTestParams, subjects, years } = useTestParams()
  const { timer, setTimer } = useTimer()
  const { questions, setQuestions } = useQuestions(testParams, setTimer)
  const paramProps = { testParams, setTestParams, years, subjects }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", minHeight: "100vh" }}>
      <AppHeader setStudent={setStudent} student={student} />
      {notification.show &&
        <Notification notification={notification} setNotification={setNotification} />}
      <Routes>
        <Route exact path="/" element={!student ?
          <Home setStudent={setStudent} setNotification={setNotification} />
          : <Navigate to='/dashboard' />} />
        <Route exact path="/dashboard" element={
          <Dashboard student={student} {...paramProps} />} />
        <Route exact path="/questions"
          element={
            <Questions questions={questions} setQuestions={setQuestions} timer={timer}/>
          } />
      </Routes>
    </div>
  )
}
export default App;