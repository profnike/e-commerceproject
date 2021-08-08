function show(){
   
    document.getElementById("system").style.display="none"
    document.getElementById("mobile").style.display="flex"
}
function close(){
   
    document.getElementById("system").style.display="inline"
    document.getElementById("mobile").style.display="none"
}


document.getElementById("menu").addEventListener("click",show)
document.getElementById("close").addEventListener("click",close)