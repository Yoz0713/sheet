import React from 'react'
import { useState, useRef, useCallback } from 'react';
export default function ScaleDrag({ children, maxRatio = 1, zoomImg1, zoomImg2, init = { x: 0, y: 0 } }) {
    //托拽縮放
    const [scaleRatio, setScaleRatio] = useState(1);
    const [x, setX] = useState(maxRatio == 1 ? init.x : 0);
    const [y, setY] = useState(maxRatio == 1 ? init.y : 0);
    const [flag, setFlag] = useState(false);
    const [press, setPress] = useState({ x: 0, y: 0 })
    const dragTarget = useRef(null)
    //anchor dot




    const zoomIn = (e) => {
        e.stopPropagation()
        e.preventDefault()


        requestAnimationFrame(() => {
            setScaleRatio(maxRatio);
            setX(init.x);
            setY(init.y);
        });



    }
    const zoomOut = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setScaleRatio(1);
        setX(0);
        setY(0);
    }
    const onMouseMove = useCallback((e) => {
        e.preventDefault();

        if ((flag && scaleRatio == maxRatio)) {
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
        cursor: "pointer",
        pointerEvents: "auto",
    }
    return (
        <>
            <div className="imgBox" onClick={(e) => {
                e.stopPropagation()
            }} onMouseDown={onMouseDown} style={imgBoxStyle}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}>
                <div className="box"
                    ref={dragTarget}
                    style={boxStyle}>
                    {children}
                </div>
            </div>
            <div className="zoom" style={{ display: maxRatio == 1 ? "none" : "flex", pointerEvents: "auto", padding: "0.6vw" }}>
                <img src={zoomImg1} onClick={zoomIn} style={{ ...zoomImgStyle, filter: scaleRatio == maxRatio ? "brightness(0.8) grayscale(100%)" : "none" }} />
                <img src={zoomImg2} onClick={zoomOut} style={{ ...zoomImgStyle, filter: scaleRatio == 1 ? "brightness(0.8) grayscale(100%)" : "none" }} />
            </div>
        </>


    )
}