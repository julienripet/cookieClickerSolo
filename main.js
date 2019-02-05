let nombreCookie = 0; //Nombre total de cookies que le joueur possède
let nombreClick = 0;    //Compteur de click, ne sers à rien dans le programme en soi. Uniquement là à titre indicatif
let multiplicateur = 1; //Bonus achetable par le joueur, multiplie le nombre de cookies par click, actuellement, se multiplie par 2 à chaque achat
let additionnal = 0; //Bonus achetable par le joueur, augmente le nombre de cookies gagnés par click par un nombre, cfr palierAddi  

let score = document.getElementById("Score"); //Init de l'affichage du score
let message = document.getElementById("messageUser");   //Init de l'affichage des messages d'info, ou d'erreur
let btnAddition = document.getElementById("Addition"); // Init de la variable pour afficher ou non le bouton addition

let palierMultiCout = [1,20,50,100,200,500];    //Cout de chaque multiplicateur, augmente en fonction de palierCourrantMulti
let palierCourrantMulti = 0;    //Sert à se déplacer dans le tableau palierMultiCout, pour augmenter le prix des multiplicateurs après chaque achat

//Bonus inspiré du cookieclicker du CERN, n'est pas obligatoire, peut être désactivé sans danger
let boolAddition = true;   //Booléen, permettant de désactiver le bonus addition, si non désiré. Simplement le mettre à false.
let palierAddiCout = [1,20,50,200,500];     //Cout de chaque bonus d'addition, augmente en fonction de palierCourrantAddi
let palierAddi = [1,10,15,20,50];   //Bonus de cookies gagnés à chaque click en plus de la multiplication 
let palierCourrantAddi = 0;     //Compteur, sers à se déplacer dans les tableaux palierAddi et palierAddiCout


//Fonction onload, assigne les éléments html à leur variables
window.onload = function(){
    score = document.getElementById("Score");
    message = document.getElementById("messageUser");
    let btnAddition = document.getElementById("Addition");
    score.textContent = nombreCookie;
    message.textContent = "";
    console.log(score.innerHTML);
    if (!boolAddition){
        console.log("Mode multiplication only")
        btnAddition.parentNode.removeChild(btnAddition);
    }
}

// Fonction principale, appelée dès que le Cookie est cliqué, ou quand l'auto-clicker s'active(à implémenter)
let main = function(){   
    nombreClick++;
    console.log(nombreClick);
    let show = function(){ 
            score.textContent = nombreCookie;
        }
    let click01 = function(){
        nombreCookie =  nombreCookie + (1 *multiplicateur) + additionnal;
        show();
};

    let score = document.getElementById("Score");
    show();
    click01();
}

// Appelée quand on click le bouton Multiplication, Achète un bonus si assez de cookies, affiche une erreur sinon, ou si on a atteint la limite
let augmenterMultiplicateur = function(){

    console.log("Multiplication")
    console.log(palierMultiCout)
    console.log(palierCourrantMulti);

    if (nombreCookie >= palierMultiCout[palierCourrantMulti]){
        multiplicateur*=2;
        nombreCookie -= palierMultiCout[palierCourrantMulti];
        score.textContent = nombreCookie;
        palierCourrantMulti++;
        message.textContent = "Multiplication achetée";

    }
    else {
        if(palierMultiCout.length <= palierCourrantMulti){
            message.textContent = "Multiplication maximum atteinte!";
        } else{
            message.textContent = "Pas assez de cookies";
        }
    }
}

// Appelée quand on click le bouton Addition, Achète un bonus si assez de cookies, affiche une erreur sinon, ou si on a atteint la limite
let addition = function(){

    console.log("addition");
    console.log(palierAddi);
    console.log(palierAddiCout);
    console.log(palierCourrantAddi);
    if(boolAddition){
        if (nombreCookie >= palierAddiCout[palierCourrantAddi]){
            additionnal = additionnal + palierAddi[palierCourrantAddi];
            nombreCookie -= palierAddiCout[palierCourrantAddi];
            score.textContent = nombreCookie;
            palierCourrantAddi++;
            message.textContent = "Addition achetée";

        }
        else {
            if(palierAddiCout.length <= palierCourrantAddi){
                message.textContent = "Addition maximum atteinte!";
            } else{
                message.textContent = "Pas assez de cookies";
            }
        }
    }
}