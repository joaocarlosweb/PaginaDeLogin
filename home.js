
const button = document.querySelector("button")
const modal= document.querySelector(".modal")
const btn_closed= document.querySelector(".modal .btn_closed")
const btn_seguir= document.querySelector(".modal .btn_seguir")

button.onclick =function clicou(){
    modal.showModal()
    
}

btn_closed.onclick = function sair(){
    modal.close()
    
}
btn_seguir.onclick =function seguir(){
    
    location.href="inicio.html"
}

