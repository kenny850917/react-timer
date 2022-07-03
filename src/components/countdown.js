import React, { useState, useEffect } from 'react';
import Timer from './timer'
const CountDown = () => {
    const [start, setStart] = useState(false)
    const [over, setOver] = useState(false)
    const [pause, setPause] = useState(false)

    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(1)
    const [second, setSecond] = useState(4)
    const handleStart = () => {
        console.log('started')
        setStart(true)
        // setHour(1)
        // setMinute(2)
        // setSecond(3)
    }
    const run = () => {
        // if (start) {

        if (pause || over) return
        if (hour === 0 || minute === 0 || second === 0) {
            setOver(true)
        }
        else if (minute === 0 && second === 0) {
            setHour(hour - 1)
            setMinute(59)
            setHour(59)
        } else if (second === 0) {
            setMinute(minute - 1)
            setSecond(59)
        } else {
            setSecond(second - 1)
        }
        // }

    }
    const handleReset = () => {
        setHour(hour)
        setMinute(minute)
        setSecond(second)
        setOver(false)
        setPause(false)
    }
    useEffect(() => {
        const timerID = setInterval(() => run(), 1000);
        return () => clearInterval(timerID);
    })


    return (
        <>
            <div>
                This is countDown

                <form>
                    <label>Hour:
                        <input
                            type="number"
                            value={hour}
                            onChange={(e) => setHour(e.target.value)}
                        />
                    </label>
                    <label>Minute:
                        <input
                            type="number"
                            value={minute}
                            onChange={(e) => setMinute(e.target.value)}
                        />
                    </label>
                    <label>Second:
                        <input
                            type="number"
                            value={second}
                            onChange={(e) => setSecond(e.target.value)}
                        />
                    </label>
                    <label>
                        <button onClick={() => handleStart()} >start</button>
                    </label>
                    <label>
                        <button onClick={() => setPause(!pause)}>{pause ? 'Resume' : 'Pause'}</button>
                    </label>
                    <label>
                        <button onClick={() => handleReset()}>reset</button>
                    </label>
                </form>
            </div>
            <div><p>{`${hour.toString().padStart(2, '0')}:${minute
                .toString()
                .padStart(2, '0')}:${second.toString().padStart(2, '0')}`}</p></div>

            {/* <Timer hour={hour} minute={minute} second={second} /> */}
        </>
    );


}

export default CountDown;