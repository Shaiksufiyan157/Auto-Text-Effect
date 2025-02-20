const textEl=document.getElementById('text')
const speedEl=document.getElementById('speed')
const text='I hate programming'
let idx=1;
let speed=300/speedEl.value

showText()
function showText(){
    textEl.innerText=text.slice(0,idx)
    idx++;
    if(idx>text.length){
        idx=1
    }
    setTimeout(showText,speed)
}
speedEl.addEventListener('input',()=>speed=300/speedEl.value)