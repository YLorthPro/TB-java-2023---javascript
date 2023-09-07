function verifierMail(){
    let mail = document.getElementById("mail").value;
    let regex = /^[a-zA-Z0-9._\-]+@[a-z0-9._\-]{2,}\.[a-z]{2,4}$/;  
    if(regex.test(mail))
    {
        document.getElementById("erreur").innerHTML = "Email ok!";
    }
    else
    {
        document.getElementById("erreur").innerHTML = "Ce n'est pas un Email valide";
    }
  }