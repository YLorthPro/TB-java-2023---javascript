function verifierMail() {
    const reg = /^[a-z0-9_.]+@[a-z0-9._-]+\.[a-z]{2,3}$/i;
    let mail = document.getElementById("mail").value;
	if(reg.test(mail)){
		alert("Email ok");
    }
	else{
		alert("Ce n'est pas un Email valide");
		form.reset();
    }
}
