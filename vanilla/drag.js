function drag(wrap, bar, target) {
    const wrapper = document.querySelector(wrap);
    const dragBar = document.querySelector(bar);
    const targetView = document.querySelector(target);
    if (window.innerWidth > 1024) {

        wrapper.addEventListener("mousedown", (e) => {
            let parentWidth = wrapper.clientWidth;
            let ratio;
            let dragWidth = dragBar.clientWidth / 2
            let ratio2;

            document.onmousemove = (j) => {
                j.preventDefault()

                let mouseX = j.clientX - (window.innerWidth - parentWidth);

                ratio = mouseX / parentWidth * 100;
                ratio2 = mouseX / parentWidth * 100 + (dragWidth / parentWidth * 100);

                if (mouseX <= -dragWidth) {
                    dragBar.style.left = `${0 - dragWidth}px`;
                    targetView.style.clipPath = `polygon(0 0 , 0% 0  ,0% 100% ,0 100%, 0 0)`;
                    return
                } else if (mouseX >= parentWidth * 0.98) {
                    dragBar.style.left = `${98.5}%`;
                    targetView.style.clipPath = `polygon(0 0 , 100% 0  ,100% 100% ,0 100%, 0 0)`;
                    return
                }
                window.requestAnimationFrame(() => {
                    dragBar.style.left = `${ratio}%`;
                    targetView.style.clipPath = `polygon(0 0 , ${ratio2}% 0  ,${ratio2}% 100% ,0 100%, 0 0)`;
                });
            }
            document.onmouseup = (e) => {

                document.onmousemove = null
            }

        })
    } else {
        wrapper.addEventListener("touchstart", (e) => {
            e.preventDefault()
            let parentWidth = wrapper.clientWidth;
            let ratio;
            let dragWidth = dragBar.clientWidth / 2
            let ratio2;

            document.ontouchmove = (j) => {


                let mouseX = j.touches[0].clientX - (window.innerWidth - parentWidth);

                ratio = mouseX / parentWidth * 100;
                ratio2 = mouseX / parentWidth * 100 + (dragWidth / parentWidth * 100);

                if (mouseX <= -dragWidth) {
                    dragBar.style.left = `${0 - dragWidth}px`;
                    targetView.style.clipPath = `polygon(0 0 , 0% 0  ,0% 100% ,0 100%, 0 0)`;
                    return
                } else if (mouseX >= parentWidth * 0.98) {
                    targetView.style.clipPath = `polygon(0 0 , 100% 0  ,100% 100% ,0 100%, 0 0)`;
                    return
                }
                window.requestAnimationFrame(() => {
                    dragBar.style.left = `${ratio}%`;
                    targetView.style.clipPath = `polygon(0 0 , ${ratio2}% 0  ,${ratio2}% 100% ,0 100%, 0 0)`;
                });
            }
            document.ontouchend = (e) => {
                document.ontouchmove = null
            }

        })
    }
}


//HTML結構
{/* <div class="imgBox"> == props.wrap
<div class="box">
    <img src="./img/jpg/night-view.jpg" class="night-view">
    <span class="night-thumb">夜景外觀3D示意圖</span>
</div>
<div class="box"> == props.target == 上面那一層圖片
    <img src="./img/jpg/sun-view.jpg" class="light-view">
    <span class="sun-thumb">日景外觀3D示意圖</span>
</div>
<div class="dragBar"> == props.bar
    <p>
        < </p>
            <p>></p>
</div>
</div> */}


//css結構
// .imgBox {
//     position: relative;
//     width: 65%;
//     height: 80%;
//     overflow: hidden;

//     @include tablet() {
//         width: 95%;
//         height: pxConvertor2(431.5);
//         margin-top: 6vw;
//     }

//     .box {
//         position: absolute;
//         left: 0;
//         top: 0;
//         width: 100%;
//         height: 100%;
//         z-index: 0;

//         span {
//             position: absolute;
//             bottom: 10px;
//             font-size: pxConvertor(16);
//             color: #fff;
//             letter-spacing: 0.1em;
//         }

//         .sun-thumb {
//             left: 10px;
//         }

//         .night-thumb {
//             right: 10px;
//         }

//         img {
//             width: 100%;
//             height: 100%;
//             clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0);
//             object-fit: cover;
//             pointer-events: none;
//             user-select: none;
//             /* standard syntax */
//             -webkit-user-select: none;
//             /* for Chrome、Safari */
//             -moz-user-select: none;
//             /* for Mozilla、Firefox */
//             z-index: 2;
//         }

//         &:nth-child(2) {
//             clip-path: polygon(0 0, 0 100%, 49.5% 100%, 49.5% 0, 0 0);
//         }
//     }

//     .dragBar {
//         display: flex;
//         justify-content: space-between;
//         padding: 0.4vw;
//         align-items: center;
//         position: absolute;
//         width: 2vw;
//         height: 2vw;
//         top: 0;
//         bottom: 0;
//         margin: auto 0;
//         left: 48%;
//         z-index: 10;
//         background-color: #fff;
//         border-radius: 50%;
//         filter: drop-shadow(0 0 2px #fff);
//         cursor: pointer;

//         @include tablet() {
//             width: 6vw;
//             height: 6vw;
//             padding: 0 0.8vw;
//             left: 46%;
//         }

//         p {
//             user-select: none;
//             /* standard syntax */
//             -webkit-user-select: none;
//             /* for Chrome、Safari */
//             -moz-user-select: none;
//             /* for Mozilla、Firefox */
//             pointer-events: none;
//             white-space: nowrap;
//             font-size: 0.9vw;
//             color: #736357;
//             font-weight: 900;
//             transform: scale(0.5, 1.5);

//             @include tablet() {
//                 font-size: 3.5vw;
//             }
//         }

//         &::after {
//             display: block;
//             content: "";
//             position: absolute;
//             left: 0;
//             right: 0;
//             margin: 0 auto;
//             top: -50vw;
//             width: 5px;
//             height: 51vw;
//             background-color: #fff;

//             @include tablet() {
//                 height: 100vw;
//             }
//         }


//     }
// }