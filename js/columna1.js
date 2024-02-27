var numero1 = 0;
var operacion = "";
let history = [];
let iguals = false;


function numberSiete() {
    let valueDisplay= document.getElementById("display").value;
    if(valueDisplay === "" || iguals) {
        document.getElementById("display").value = "7";
    } 
        
    else{
        valueDisplay = `${valueDisplay}7`;
        document.getElementById("display").value =valueDisplay;

    }}

function numberCuatro() {
    let valueDisplay= document.getElementById("display").value;
    if(valueDisplay === "") {
        document.getElementById("display").value = "4";
    }
        
    else{
        valueDisplay = `${valueDisplay}4`;
        document.getElementById("display").value =valueDisplay;

    }}

function numberUno() {
    let valueDisplay= document.getElementById("display").value;
    if(valueDisplay === "") {
        document.getElementById("display").value = "1";
    }
            
    else{
        valueDisplay = `${valueDisplay}1`;
        document.getElementById("display").value =valueDisplay;
    
    }}

function plusResta() {
    let valueDisplay=document.getElementById("display").value;

    if(numero1 != 0){
        let numero2 = parseFloat(valueDisplay);
        let result = numero1 - numero2;
        history.push(new String(`${numero1} - ${numero2} = ${result}`));  
        historyOperacions();
        numero1 = result;
    }
    else {
        numero1= parseFloat(valueDisplay);
        
    }
    document.getElementById("display").value = "";
    operacion ="resta";
   
} 

function plusSuma(){
    let valueDisplay=document.getElementById("display").value;

    if(numero1 != 0){
        let numero2 = parseFloat(valueDisplay);
        let result = numero1 + numero2;
        history.push(new String(`${numero1} + ${numero2} = ${result}`));  
        historyOperacions();
        numero1 = result;
    }
    else {
        numero1= parseFloat(valueDisplay);
        
    }
    document.getElementById("display").value = "";
    operacion ="suma";


}

function plusMutiplicacion(){
    let valueDisplay=document.getElementById("display").value;

    if(numero1 != 0){
        let numero2 = parseFloat(valueDisplay);
        let result = numero1 * numero2;
        history.push(new String(`${numero1} * ${numero2} = ${result}`));  
        historyOperacions();
        numero1 = result;
    }
    else {
        numero1= parseFloat(valueDisplay);
        
    }
    document.getElementById("display").value = "";
    operacion ="multiplicacion";


}

function plusDivision(){
    let valueDisplay=document.getElementById("display").value;

    if(numero1 != 0){
        let numero2 = parseFloat(valueDisplay);
        let result = numero1 / numero2;
        history.push(new String(`${numero1} / ${numero2} = ${result}`));  
        historyOperacions();
        numero1 = result;
    }
    else {
        numero1= parseFloat(valueDisplay);
        
    }
    document.getElementById("display").value = "";
    operacion ="division";


}


function igual() {

    let result= 0;
    let numero2 = 0;
    let valueDisplay=document.getElementById("display").value;

    iguals = true;

    if (valueDisplay !== "") {
        numero2= parseFloat(valueDisplay);

        switch(operacion){
            case "suma":
                result = numero1 + numero2;
                operacion = "+";
                break;
            
            case "resta":
                result = numero1 - numero2;
                operacion = "-";
                break;    
               
            case "multiplicacion":
                result = numero1 * numero2;
                operacion = "*";
                break;    
               
            case "division":
                result = numero1 / numero2;
                operacion = "/";

                break;    
            case "":
                result= numero2;
                operacion = "";
                break;
        } 

    }else {
        result= numero1;

    }

    history.push (new String(`${numero1} ${operacion} ${numero2} = ${result}`)); 

    document.getElementById("display").value =result;

    historyOperacions();

    limpiar();
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

