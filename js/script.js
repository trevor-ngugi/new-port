const text=document.getElementById("occupation")
const prog="and i am a full stack developer"
let idx=1

setInterval(writeText,100);

function writeText(){
    text.innerText=prog.slice(0,idx)
    idx++;

    if(idx>prog.length){
        idx=1
    }
}