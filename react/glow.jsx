import React from 'react'
const glowBg = require("../../../img/lifefunction/webp/001-glowing-area.webp").default
export default function Glow({ number, color }) {
    const styles = {
        glow: {
            position: "absolute",
            transformOrigin: "center bottom",
            overflow: "hidden"
        },
        dot: {
            position: "absolute",
            width: "0.2vw",
            height: "0.2vw",
            borderRadius: "50%",
            backgroundColor: color,
            boxShadow: `0 0 10px 2.5px ${color}`,
            animationName: "glow",
            animationTimingFunction: "linear",
            animationFillMode: "forwards",
            animationIterationCount: "infinite",
            bottom: "-20px"
        },
        img: {
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
        }
    }
    let dot = [];
    for (let i = 0; i < number; i++) {
        dot.push(
            {
                x: Math.floor(Math.random() * 100) + "%",
                scale: Math.random() * 1.5 + 0.3,
                duration: Math.random() * 7 + 3 + "s",
                delay: Math.random() * 6 + "s",
            }
        )
    }
    return (
        <div className="glow" style={styles.glow}>
            {dot.map((item, i) => {
                return <div key={i} className='glow-dot' style={{ ...styles.dot, left: item.x, animationDuration: item.duration, animationDelay: item.delay, transform: `scale(${item.scale})` }}></div>
            })}
            <img src={glowBg} />
        </div>
    )
}

// .glow {
//     position: absolute;
//     right: 0;
//     left: 0;
//     margin: 0 auto;
//     top: 8.1vw;
//     width: 25%;
//     height: 29.5vw;

//     transform-origin: center bottom;

//     .dot {
//         position: absolute;
//         bottom: 0;
//         width: 0.2vw;
//         height: 0.2vw;
//         border-radius: 50%;
//         background-color: #fff;
//         box-shadow: 0 0 10px 3px #fff;
//         animation-name: glow;

//         animation-timing-function: linear;
//         animation-fill-mode: forwards;
//         animation-iteration-count: infinite;
//     }

//     img {
//         position: absolute;
//         left: 0;
//         bottom: 0;
//         width: 100%;
//         height: 100%;

//     }
// }