import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppHeader, Notification } from './components'
import { Home, Dashboard, Questions } from './pages'
import { dummyData } from './dummyData'

const App = () => {
  const [student, setStudent] = useState(null)
  const [notification, setNotification] = useState({ show: false, msg: '', type: 'danger' })
  return (
    <div>
      <AppHeader setStudent={setStudent} student={student} />
      {notification.show &&
        <Notification notification={notification} setNotification={setNotification} />}
      <Routes>
        <Route exact path="/" element={!student ?
          <Home setStudent={setStudent} setNotification={setNotification} />
          : <Navigate to='/dashboard' />} />
        <Route exact path="/dashboard" element={
          <Dashboard student={student} />} />
        <Route exact path="/questions"
          element={
            <Questions questions={dummyData} />
          } />
      </Routes>
    </div>
  )
}
export default App;