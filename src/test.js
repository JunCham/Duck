import  string from './css.js';
let n = 1
console.log(n)
demo.innerText = string.substr(0,n)
demo2.innerHTML = string.substr(0,n)
const x = () =>{
    n+=1
    if(n>string.length){
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substr(0,n)
    demo2.innerHTML = string.substr(0,n)
    demo.scrollTop = demo.scrollHeight
}
let time =50
const play = () =>{
    return setInterval(x,time)
}
let id = play()
const pause = ()=>{
    window.clearInterval(id)
}
buttonPause.onclick = () =>{
    pause()
}

buttonPlay.onclick = () =>{
    id = play()
}
buttonSlow.onclick = () =>{
    pause()
    time = 200
    id = play()
}
buttonFast.onclick = () =>{
    pause()
    time = 0
    id = play()
}