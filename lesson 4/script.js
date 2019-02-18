            //CICLO FOR

const MILK_FOR_A_PORTION_ML = 60;

function printMilkByPieEaters(peopleNumber){
    var milkTotal = peopleNumber * MILK_FOR_A_PORTION_ML;
    console.log('Il latte necessario per '+peopleNumber+ ' corrisponde a '+milkTotal+' ml '); //stampiamo in console 
}



function printMilkQuantities(){


for(var peopleNumber = 1; peopleNumber <= 10; peopleNumber++){
    printMilkByPieEaters(peopleNumber);
}

           
}
printMilkQuantities();


//FOREACH: scorrere una lista di elementi e per ognuno averne l'indice
//da 0 a n-1


var names = ['Carl', 'Bill', 'Steve', 'Mark'];


function printTarget(name){
    console.log('Target of today is customer: '+name);
}

for(var nameIndex in names){
    var name = names[nameIndex];
    printTarget(name);
}
