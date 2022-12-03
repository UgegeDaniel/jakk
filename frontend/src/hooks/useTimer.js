import { useState, useEffect } from 'react'

const useTimer = () => {
    const oldTimer = JSON.parse(localStorage.getItem('timer'))
    const [timer, setTimer] = useState(oldTimer || { hour: 0, minute: 0, second: 0 })

    useEffect(() => {
        const { hour, minute, second } = timer
        if (hour === 0 && minute === 0 && second === 0) {
            setTimer({ ...timer, hour: 2 })
        }
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
        // console.log(timer)
        return () => clearInterval(cleanUp)
    }, [setTimer, timer])
    return { timer, setTimer }
}

export default useTimer;