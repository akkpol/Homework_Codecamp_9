function changeColor(){
    let tcollor = document.querySelector("#in1").value
    let bcollor = document.querySelector("#in2").value
    alert(tcollor)
    document.querySelector("h2").style.color=tcollor
    document.querySelector("h2").style.backgroundColor=bcollor
    
}