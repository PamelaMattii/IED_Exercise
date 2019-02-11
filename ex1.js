
//EXERCISE 1


var myNum = prompt('Choose a number:');
	if (myNum == 10){
        alert('you choose the number ten');
    }
    

//EXERCISE 2


var numOne = prompt('Choose the 1st number:');
var numTwo = prompt('Choose the 2nd number:');
	if (numOne == numTwo){
		alert('1st and 2nd number are the same!');
	} 



//EXERCISE 3    
		
var name1 = prompt('insert a name:');
var name2 = prompt('insert another name:');

name1 = parseInt(name1);
name2 = parseInt(name2);

    if (name1 == name2){
        alert('you chose the same name');
    }else{
        alert('you chose two beautiful names!');
    }


//EXERCISE 4


var food = prompt('choose between pizza, snack, spaghetti or anything else:');

    if (food == "pizza" && "snack"){
        alert("short break");
    }else if( food == "spaghetti"){
        alert('long break');
    }else{
        alert('good choice');
    } 