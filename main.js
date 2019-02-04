let nombreCookie = 0;
let multiplier = 1;
let additionnal = 0;  
let score = document.getElementById("Score");
let message = document.getElementById("messageUser");
let palier = [1,200];
let palierCourrant = 0;

window.onload = function(){
    score = document.getElementById("Score");
    message = document.getElementById("messageUser");
    score.textContent = nombreCookie;
    message.textContent = "";
    console.log(score.innerHTML);

}

let main = function(){   
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
    console.log(palierCourrant);
    if (nombreCookie > palier[palierCourrant]){
        multiplier*=2;
        nombreCookie -= palier[palierCourrant];
        score.textContent = nombreCookie;
        palierCourrant++;
        message.textContent = "Multiplication achetée";

    }
    else {
        if(palier.length = palierCourrant){
            message.textContent = "Multiplication maximum atteinte!";
        } else{
            message.textContent = "Pas assez de cookies";
        }
    }
}