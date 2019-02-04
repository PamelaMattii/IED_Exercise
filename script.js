var myNumber = prompt('Write a number:');
myNumber = parseInt(myNumber);

if( myNumber < 0){
    alert('Given number is negative.')
    myNumber = Math.abs(myNumber);
}else{
    alert('Given nuber is positive!')
}


var squareRoot = Math.sqrt(myNumber);

alert(squareRoot);
