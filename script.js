let p = document.getElementsByClassName("vypujcka-item")
console.log(p)
function menu(){
    for(let i = 0; i <p.length;i++){
   p[i].getElementsByTagName("input")[0].onclick = (e) => {p[i].getElementsByClassName("detail-vypujcky-container-layout")[0].classList.toggle("detail-vypujcky-container")}}
   
}

 
