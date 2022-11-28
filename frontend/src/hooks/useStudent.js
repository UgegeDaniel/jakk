import { useState, useEffect } from 'react'
const useStudent = () => {
    const [student, setStudent] = useState(null)
    useEffect(() => {
      const login = JSON.parse(localStorage.getItem('student'))
      if (login) {
        setStudent(login)
      }
    }, [])
    return {student, setStudent}
} 

export default useStudent;