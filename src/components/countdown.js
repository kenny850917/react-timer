import React, { useState, useEffect } from 'react';
const CountDown = () => {
    const [start, setStart] = useState(false)
    const [over, setOver] = useState(false)
    const [pause, setPause] = useState(false)

    const [initHour, setInitHour] = useState(0)
    const [initMinute, setInitMinute] = useState(0)
    const [initSecond, setInitSecond] = useState(0)

    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)

    const run = () => {

        // console.log('started',start)
        if (start === true) {
            if (pause || over) return;
            if (hour === 0 && minute === 0 && second === 0) {
                console.log('over?')
                setOver(true)
                setStart(false)
            }
            else if (minute === 0 && second === 0) {
                setHour(hour - 1)
                setMinute(59)
                setSecond(59)
            } else if (second === 0) {
                setHour(hour)
                setMinute(minute - 1)
                setSecond(59)
            } else {
                setHour(hour)
                setMinute(minute)
                setSecond(second - 1)
            }
        }

    }

    const handleSetHour = (e) => {
        setInitHour(e)

    }
    const handleSetMinute = (e) => {
        setInitMinute(e)

    }
    const handleSetSecond = (e) => {
        setInitSecond(e)
    }


    const handleStart = () => {
        console.log('handle start', initHour, initMinute, initSecond)
        let overflowMinute = 0
        let overflowHour = 0
        overflowMinute = Math.floor(initSecond / 60)
        overflowHour = Math.floor(initMinute / 60)
        setSecond(initSecond % 60)
        setMinute(parseInt(initMinute % 60) + parseInt(overflowMinute))
        setHour(parseInt(initHour) + parseInt(overflowHour))
        setStart(true)
    }
    const handleReset = () => {
        setHour(0)
        setMinute(0)
        setSecond(0)
        setOver(false)
        setPause(false)
        setStart(false)
    }
    useEffect(() => {
        const timerID = setInterval(() => run(), 1000);
        return () => clearInterval(timerID);
    })


    return (
        <>
            <div>
                Count Down Timer
                <form>
                    <label>Hour:
                        <input
                            type="number"
                            value={initHour}
                            onChange={(e) => handleSetHour(e.target.value)}
                        />
                    </label>
                    <label>Minute:
                        <input
                            type="number"
                            value={initMinute}
                            onChange={(e) => handleSetMinute(e.target.value)}
                        />
                    </label>
                    <label>Second:
                        <input
                            type="number"
                            value={initSecond}
                            onChange={(e) => handleSetSecond(e.target.value)}
                        />
                    </label>
                    <label>
                        <button type='button' onClick={() => handleStart()} >start</button>
                    </label>
                    <label>
                        <button type="button" onClick={() => setPause(!pause)}>{pause ? 'Resume' : 'Pause'}</button>
                    </label>
                    <label>
                        <button type="button" onClick={() => handleReset()}>reset</button>
                    </label>
                </form>
            </div>
            {/* <div>{hour}:{minute}:{second}</div> */}
            <div><p>{`${hour.toString().padStart(2, '0')}:${minute
                .toString()
                .padStart(2, '0')}:${second.toString().padStart(2, '0')}`}</p></div>

            {/* <Timer hour={hour} minute={minute} second={second} /> */}
        </>
    );


}

export default CountDown;