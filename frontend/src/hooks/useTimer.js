import { useState, useEffect } from 'react'

const useTimer = () => {
    const [timer, setTimer] = useState({ hour: 0, minute: 0, second: 0 })
    useEffect(() => {
        if (timer.hour > 0) {
            const oldTimer = JSON.parse(localStorage.getItem('timer'))
            if (oldTimer) {
                setTimer(oldTimer)
            }
        }
        const cleanUp = setInterval(() => {
            localStorage.setItem('timer', JSON.stringify(timer))
        }, 3000)
        return () => clearInterval(cleanUp)
    }, [timer])
    return {timer, setTimer}
}

export default useTimer;