//FUNCTION: possiamo riutilizzare più volte il codice senza riscriverlo
//VARIABILE GLOBALE: può essere letta da qualsiasi blocco di codice.però se dichiaro un'altra variabile e la chiamo uguale, rendo inutilizzabile la var globale
//CONST: una costante. si scrive in uppercase separata da underscore. non è modificabile una volta dichiarata.


function readNumber(){
    var myNumber = prompt("Scrivi un numero:");
    myNumber = parseInt(myNumber);
    return myNumber; //ritorna in uscita un valore che salviamo in una variabile
}

function printMessage(message){ //dichiarando l'argomento possiamo utulizzarlo come una variabile
    var myMessage = message;
    alert(myMessage);
    return; //non è obbligatorio scriverlo perché non ritorna nulla

}

function isEqualToTen(myNumber){
    const COMPARABLE_NUMBER = 10;
    return myNumber == COMPARABLE_NUMBER;

}

function simpleCheck(){
var myNumber = readNumber(); //richiamo la prima funzione
var isNumEqToTen = isEqualToTen(myNumber); //richiamo la terza e confrontiamo i numeri
    if (isNumEqToTen){
        printMessage('Si il numero è proprio uguale a 10'); //richiamo la seconda e stampo un messaggio
    }
}


simpleCheck();


//IF ELSE

function binaryCheck(){
    var myNumber = readNumber(); 
    var isNumEqToTen = isEqualToTen(myNumber);
    if (isNumEqToTen){
        printMessage('Si il numero è proprio uguale a 10');
    }else{
        printMessage('No, non è il 10'); 
    }
}

//SWITCH CASE: paragonare tanti numeri

function switchPie(myNumber){
    switch(myNumber){
        case 2: 
        case 5:
        case 7:
        case 13:
            return 'Primo';
        case 10:
            return 'Base';
        case 8:
        case 64:
            return 'Octal';
        default:
            return 'None';
    }
}

function callSwitch(){
var aNumber = readNumber();
var message = switchPie(aNumber);
printMessage(message);
}

callSwitch();