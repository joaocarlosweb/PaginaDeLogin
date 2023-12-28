
//
let nome= document.querySelector(".nome").value;
function logar(){

    let email= document.querySelector(".email").value;
    let senha= document.querySelector(".senha").value;
    
    
    if(email== "admin@gmail" && senha == 1234){
        alert("você logou com sucesso")
        location.href="home.html"
    }else{
        alert("senha ou email incorreto")
        
    }

}
