import React, { useState, useEffect } from 'react'

export default function RunNumber({ target, gap, init, speed, delay }) {
    const [number, setNumber] = useState(init || 0);
    useEffect(() => {
        let timer;
        setTimeout(() => {
            let num = number
            timer = setInterval(() => {
                num = num + gap || num + 1
                if (num >= target + 1) {
                    setNumber(target)
                    clearInterval(timer)
                    return
                } else {
                    setNumber(num)
                }
            }, speed)


        }, delay)

        return () => {
            clearInterval(timer)
        }

    }, []);

    return (
        <span>
            {number}
        </span>
    )
}