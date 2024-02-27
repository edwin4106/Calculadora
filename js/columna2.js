


function numberOcho() {
    let valueDisplay= document.getElementById("display").value;
    if(valueDisplay === "") {
        document.getElementById("display").value = "8";
    }
        
    else{
        valueDisplay = `${valueDisplay}8`;
        document.getElementById("display").value =valueDisplay;

    }
        
}
function numberCinco() {
    let valueDisplay= document.getElementById("display").value;
    if(valueDisplay === "") {
        document.getElementById("display").value = "5";
    }
        
    else{
        valueDisplay = `${valueDisplay}5`;
        document.getElementById("display").value =valueDisplay;

    }
        
}
    
function numberDos() {
    let valueDisplay= document.getElementById("display").value;
    if(valueDisplay === "") {
        document.getElementById("display").value = "2";
    }
        
    else{
        valueDisplay = `${valueDisplay}2`;
        document.getElementById("display").value =valueDisplay;

    }
        
}

function numberCero() {
    let valueDisplay= document.getElementById("display").value;
    if(valueDisplay === "") {
        document.getElementById("display").value = "0";
    }
        
    else{
        valueDisplay = `${valueDisplay}0`;
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


