window.onload = function(){

    let nombreCookie = 0;
    let cookie = {
        number : 0,
        multiplier : 1,
        additionnal : 0,    
        show: function(){ 
            document.getElementById("Score").textContent = this.number;
        },
        click: function(){
            this.number = (1*this.multiplier)+ this.additionnal;
            this.show();
        },

    }
    let score = document.getElementById("Score");
    cookie.show();
    cookie.click();
}

cookie.click();
