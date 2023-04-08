function enviar(){

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(email == ""){
        alert("Campo e-mail nao preenchido");
        return false;
    }else if(senha == ""){
        alert("Campo senha nao preenchido");
        return false;
    }else if(senha.lenght < 8){
        alert("Minimo de caracteres nao atendido");
        return false;
    }


}
