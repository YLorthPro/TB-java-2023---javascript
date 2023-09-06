function changerCouleur(){
    let h1 = document.querySelector("h1");

    if(h1.classList.contains("rouge")){
        h1.classList.remove("rouge");
        h1.classList.add("bleu");
    } else {
        h1.classList.remove("bleu");
        h1.classList.add("rouge");
    }
}