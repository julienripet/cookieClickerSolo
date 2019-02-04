let nombreCookie = 0;
let nombreClick = 0;
let multiplier = 1;
let additionnal = 0;  

let score = document.getElementById("Score");
let message = document.getElementById("messageUser");

let palierMulti = [1,20,50,100,200,500];
let palierCourrantMulti = 0;

let palierAddiCout = [1,20,50,200,500];
let palierAddi = [1,10,15,20,50];
let palierCourrantAddi = 0;

window.onload = function(){
    score = document.getElementById("Score");
    message = document.getElementById("messageUser");
    score.textContent = nombreCookie;
    message.textContent = "";
    console.log(score.innerHTML);

}

let main = function(){   
    nombreClick++;
    console.log(nombreClick);
    let show = function(){ 
            score.textContent = nombreCookie;
        }
    let click01 = function(){
        nombreCookie =  nombreCookie + (1 *multiplier) + additionnal;
        show();
};

    let score = document.getElementById("Score");
    show();
    click01();
}

let multiplication = function(){

    console.log("Multiplication")
    console.log(palierMulti)
    console.log(palierCourrantMulti);

    if (nombreCookie > palierMulti[palierCourrantMulti]){
        multiplier*=2;
        nombreCookie -= palierMulti[palierCourrantMulti];
        score.textContent = nombreCookie;
        palierCourrantMulti++;
        message.textContent = "Multiplication achetée";

    }
    else {
        if(palierMulti.length <= palierCourrantMulti){
            message.textContent = "Multiplication maximum atteinte!";
        } else{
            message.textContent = "Pas assez de cookies";
        }
    }
}

let addition = function(){

    console.log("addition");
    console.log(palierAddi);
    console.log(palierAddiCout);
    console.log(palierCourrantAddi);

    if (nombreCookie > palierAddiCout[palierCourrantAddi]){
        addition+= palierAddi[palierCourrantAddi];
        nombreCookie -= palierAddiCout[palierCourrantAddi];
        score.textContent = nombreCookie;
        palierCourrantAddi++;
        message.textContent = "Addition achetée";

    }
    else {
        if(palierAddiCout.length = palierCourrantAddi){
            message.textContent = "Addition maximum atteinte!";
        } else{
            message.textContent = "Pas assez de cookies";
        }
    }

}