import React from 'react'
import { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
export default function ScaleDrag({ children, maxRatio = 1, zoomImg1, zoomImg2, init = { x: 0, y: 0 } }) {
    const reduxState = useSelector(state => state.floorReducer.floor);

    //托拽縮放
    const [scaleRatio, setScaleRatio] = useState(1);
    const [x, setX] = useState(maxRatio == 1 ? init.x : 0);
    const [y, setY] = useState(maxRatio == 1 ? init.y : 0);
    const [flag, setFlag] = useState(false);
    const [press, setPress] = useState({ x: 0, y: 0 })
    const dragTarget = useRef(null)
    //anchor dot




    const zoomIn = () => {
        let preRatio = scaleRatio
        if (scaleRatio == 1) {
            requestAnimationFrame(() => {
                setX(init.x);
                setY(init.y);
            });
        }
        setScaleRatio(preRatio + 0.5);



    }
    const zoomOut = () => {
        let preRatio = scaleRatio
        if (preRatio >= 1.5) {
            setScaleRatio(preRatio - 0.5);
        }

        if (preRatio == 1) {
            requestAnimationFrame(() => {
                setX(0);
                setY(0);
            });
        }

    }
    const onMouseMove = useCallback((e) => {
        e.preventDefault();

        if ((flag && scaleRatio != 1)) {
            requestAnimationFrame(() => {
                setX(`${e.pageX - (press.x)}px`);
                setY(`${e.pageY - (press.y)}px`);
            });
        }
    }, [flag, scaleRatio, maxRatio, press]);

    const onMouseDown = (e) => {
        setFlag(true);
        setPress({
            x: e.pageX - dragTarget.current.offsetLeft,
            y: e.pageY - dragTarget.current.offsetTop
        })
    }
    const onMouseUp = (e) => {
        setFlag(false)

    }
    const imgBoxStyle = {
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "auto",
    }
    const boxStyle = {
        position: "relative",
        width: "100%",
        height: "100%",
        transform: `scale(${scaleRatio}) `,
        left: `${x}`,
        top: `${y}`,
        transition: flag ? "0s" : " 0.6s"
    }
    const zoomImgStyle = {
        width: "1.705vw",
        height: "1.705vw",
        cursor: "pointer",
        pointerEvents: "auto",

    }
    useEffect(() => {
        return () => {
            requestAnimationFrame(() => {
                setScaleRatio(1)
                setX(0);
                setY(0);
            });
        }
    }, [reduxState])
    return (
        <>
            <div className="imgBox" onMouseDown={onMouseDown} style={imgBoxStyle}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}>
                <div className="box"
                    ref={dragTarget}
                    style={boxStyle}>
                    {children}
                </div>
            </div>
            <div className="zoom" style={{ display: maxRatio == 1 ? "none" : "flex", padding: "0.5vw", pointerEvents: "auto" }}>
                <img src={zoomImg1} onClick={zoomIn} style={{ ...zoomImgStyle, }} />
                <img src={zoomImg2} onClick={zoomOut} style={{ ...zoomImgStyle }} />
            </div>
        </>


    )
}