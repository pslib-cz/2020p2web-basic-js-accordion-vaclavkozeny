let p = document.getElementsByClassName("vypujcka-item")

function menu(){
    for(let i = 0; i <p.length;i++){
   p[i].getElementsByTagName("input")[0].onclick = () => {p[i].getElementsByClassName("detail-vypujcky-container-layout")[0].classList.toggle("detail-vypujcky-container")
    if(p[i].getElementsByClassName("detail-vypujcky-container-layout")[0].classList.contains("detail-vypujcky-container")){
        p[i].style.height = "32px"
    }
    else{
        p[i].style.height = p[i].scrollHeight + "px"
    }}}}

window.onload = menu
 
