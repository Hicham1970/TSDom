"use strict";
const titre = document.getElementById("test");
titre.innerHTML = "Ceci est un test !!!!!!";
titre.style.color = "red";
let div = document.createElement("div");
div.setAttribute("id", "monDiv");
document.body.appendChild(div);
// On récupère le bouton
const btn = document.querySelector("#btn"); // on utilise l'opérateur '!' pour dire que cela ne peut pas être et on ajoute un écouteur d'événements
btn.addEventListener("click", () => myFunction());
// la fonction  qui s'exécute lorsque l'on clique sur le bouton:
function myFunction() {
    // On ajoute du texte au div
    let monTexte = document.createTextNode("Je na sais pas ce que je fait maintenant , mais j'adores  faire des tests ..., Oui je vois : Je suis en train de dire au javascript de me créer un autre paragraphe qui mentionne toutes ces sottises, et a qui va s'ajouter le text qui va venir apres ces pointillés........ ");
    document.getElementById("monDiv").appendChild(monTexte);
    // On crée une balise apres le nouveau paragraphe
    let maBalise = document.createElement("strong");
    maBalise.textContent =
        " Salut toi, oui c'est moi le text qui vient apres les pointillés, et tu remarque que je sui écris en gras";
    // On l'ajoute dans notre  la div
    document.getElementById("monDiv").appendChild(maBalise);
    // On récupéré le paragraphe:
    const paragraph = document.getElementsByClassName("param");
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].innerHTML = " "; // Assign content to each paragraph element.
    }
}
// On récupère le bouton param:
//# sourceMappingURL=index.js.map