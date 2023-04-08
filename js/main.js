function enviar(){

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(email == ""){
        alert("Campo e-mail não preenchido");
        return false;
    }else if(senha == ""){
        alert("Campo senha não preenchido");
        return false;
    }else if(senha.length < 8){
        alert("Mínimo de carateres não atendidos");
        return false;
    }
}