import { useState, useEffect, useRef } from 'react'

const useTimer = (testStart, setTestStart) => {
    const [timer, setTimer] = useState({ hour: 0, minute: 0, second: 0 })
    const { hour, minute, second } = useRef(timer)
    
    useEffect(() => {
        const startTimer = () => {
            const cleanUp = setInterval(() => {
                if (hour === 0 && minute === 0 && second === 0) {
                    return
                }
                else if (minute === 0 && hour > 0) {
                    setTimer({ hour: hour - 1, minute: 59, second: 59 })
                }
                else if (second === 0 && minute > 0) {
                    setTimer({ ...timer, minute: minute - 1, second: 59 })
                }
                else if (second > 0 && second > 0) {
                    setTimer({ ...timer, second: second - 1 })
                }
                if (second % 5 <= 0) {
                    localStorage.setItem('timer', JSON.stringify(timer))
                }
            }, 1000)
            return () => clearInterval(cleanUp)
        }
        startTimer()
    }, [hour, minute, second, setTimer, timer, testStart])

    useEffect(() => {
        if (timer.hour > 0) {
            const oldTimer = JSON.parse(localStorage.getItem('timer'))
            if (oldTimer) {
                setTimer(oldTimer)
            }
        }
        const cleanUp = setInterval(() => {
            localStorage.setItem('timer', JSON.stringify(timer))
        }, 5000)
        return () => clearInterval(cleanUp)
    }, [timer])
    return { timer, setTimer }
}

export default useTimer;