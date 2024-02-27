
function numberNueve() {
    let valueDisplay= document.getElementById("display").value;
    if(valueDisplay === "") {
        document.getElementById("display").value = "9";
    }
        
    else{
        valueDisplay = `${valueDisplay}9`;
        document.getElementById("display").value =valueDisplay;

    }
        
}
function numberSeis() {
    let valueDisplay= document.getElementById("display").value;
    if(valueDisplay === "") {
        document.getElementById("display").value = "6";
    }
        
    else{
        valueDisplay = `${valueDisplay}6`;
        document.getElementById("display").value =valueDisplay;

    }
        
}
    
function numberTres() {
    let valueDisplay= document.getElementById("display").value;
    if(valueDisplay === "") {
        document.getElementById("display").value = "3";
    }
        
    else{
        valueDisplay = `${valueDisplay}3`;
        document.getElementById("display").value =valueDisplay;

    }
        
}

function numberPunto() {
    let valueDisplay= document.getElementById("display").value;
    if(valueDisplay === "") {
        document.getElementById("display").value = ".";
    }
        
    else{
        valueDisplay = `${valueDisplay}.`;
        document.getElementById("display").value =valueDisplay;

    }
        
}

function historyOperacions() {
    let html ="<ul class=\"list-group\">\n";


   for(let i = history.length-1 ; i >= 0 ; --i){
        if(history.length-1 === i) {
            html += `<li class="list-group-item activce">${history[i]}</li>\n`;
         }else {
        html += `<li class="list-group-item">${history[i]}</li>\n`;
       
    }}

    html += "</ul>";

    document.getElementById("history").innerHTML = html;
}

function limpiar() {
    numero1 = 0 ;
    operacion = "";
    history = [];

}

