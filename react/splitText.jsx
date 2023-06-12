import React from "react";

export default function SpliText({ text }) {
    const arr = text.split(/\n/);
    let newArr = arr.map((item, i) => {
        item = item.split("")
        item = item.map((item, i) => {
            let tag;
            if (item == " ") {
                tag = `\xa0`
            } else {
                tag = item
            }

            return tag
        })

        item = item.join("")

        return item
    })

    newArr = newArr.join("\n")
    newArr = newArr.split("")
    return (
        <>
            {newArr.map((item, i) => {
                if (item != "\n") {
                    return <span key={i} style={{ display: "inline-block" }}>{item}</span>
                } else {
                    return <br />
                }
            })}
        </>
    )
}

//useage 將需要拆分的字串傳入並使用map方法渲染在頁面上。p.s字串內如有換行需要使用\n


//map方法
{/* <h2 style={{ whiteSpace: "pre-wrap" }}>{newArr.map((item, i) => {
    if (item != "\n") {
        return <span key={i} style={{ display: "inline-block" }}>{item}</span>
    } else {
        return "\n"
    }
})}</h2> */}