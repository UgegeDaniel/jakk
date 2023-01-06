import { useState, useEffect } from 'react'
const useStudent = () => {
    const [student, setStudent] = useState(null)
    useEffect(() => {
      const loggedIn = JSON.parse(localStorage.getItem('student'))
      if (loggedIn) {
        setStudent(loggedIn)
      }
    }, [])
    return {student, setStudent}
} 

export default useStudent;