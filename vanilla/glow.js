function createGlow({ number, color }) {
    const styles = {
        glow: {
            position: "absolute",
            transformOrigin: "center bottom",
            overflow: "hidden",
            width: "100%",
            height: "100%",
        },
        dot: {
            position: "absolute",
            width: "0.2vw",
            height: "0.2vw",
            borderRadius: "50%",
            backgroundColor: color,
            boxShadow: `0 0 ${window.innerWidth < 821 ? "4px" : "5px"} 2.5px ` + color,
            animationName: "glow",
            animationTimingFunction: "linear",
            animationFillMode: "forwards",
            animationIterationCount: "infinite",
            bottom: "-20px"
        }
    };
    let dot = [];
    for (let i = 0; i < number; i++) {
        dot.push(
            {
                x: Math.floor(Math.random() * 94 + 3) + "%",
                scale: Math.random() * 1.5 + 0.3,
                duration: Math.random() * 7 + 3 + "s",
                delay: Math.random() * 6 + "s",
            }
        )
    }
    const glowDiv = document.createElement("div");
    glowDiv.className = "glow";
    Object.assign(glowDiv.style, styles.glow);

    dot.forEach((item, i) => {
        const dotDiv = document.createElement("div");
        dotDiv.className = "glow-dot";
        Object.assign(dotDiv.style, styles.dot, { left: item.x, animationDuration: item.duration, animationDelay: item.delay, transform: `scale(${item.scale})` });
        glowDiv.appendChild(dotDiv);
    });
    const glowWrapper = document.querySelector(".glowing")
    glowWrapper.appendChild(glowDiv); // 插入到 body 中作為例子
}

// createGlow({ number: 15, color: "#fff" })




//class版本
class Glow {
    constructor(number, color, container) {
        this.number = number;
        this.color = color;
        this.container = container
    }
    create() {
        const styles = {
            glow: {
                position: "absolute",
                transformOrigin: "center bottom",
                overflow: "hidden",
                width: "100%",
                height: "100%",
            },
            dot: {
                position: "absolute",
                width: "0.1vw",
                height: "0.1vw",
                borderRadius: "50%",
                backgroundColor: this.color,
                boxShadow: `0 0 ${window.innerWidth < 821 ? "4px" : "5px"} 2.5px ` + this.color,
                animationName: "glow",
                animationTimingFunction: "linear",
                animationFillMode: "forwards",
                animationIterationCount: "infinite",
                bottom: "-20px"
            }
        };
        let dot = [];
        for (let i = 0; i < this.number; i++) {
            dot.push(
                {
                    x: Math.floor(Math.random() * 94 + 3) + "%",
                    scale: Math.random() * 1.5 + 0.3,
                    duration: Math.random() * 7 + 3 + "s",
                    delay: Math.random() * 6 + "s",
                }
            )
        }
        const glowDiv = document.createElement("div");
        glowDiv.className = "glow";
        Object.assign(glowDiv.style, styles.glow);

        dot.forEach((item, i) => {
            const dotDiv = document.createElement("div");
            dotDiv.className = "glow-dot";
            Object.assign(dotDiv.style, styles.dot, { left: item.x, animationDuration: item.duration, animationDelay: item.delay, transform: `scale(${item.scale})` });
            glowDiv.appendChild(dotDiv);
        });
        const glowWrapper = document.querySelector(this.container)
        glowWrapper.appendChild(glowDiv); // 插入到 body 中作為例子
    }
}
//    new Glow(15, "#fff", ".first-page .glowing").create()