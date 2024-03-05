var num1 = prompt('Enter  first number:');
var num2 = prompt("Enter second number:");
var operator = prompt('Enter The Operator');

var num1 =  parseInt(num1);
var num2 = parseInt(num2);

if (operator == "+"){
    var addNum = num1 + num2;
    alert('The Sum Is:' + " " + addNum);
} else if (operator == "-"){
   var subNum= num1 - num2;
   alert('The Result of Subtraction is :' + " " +subNum) ;
}else if (operator == "/") {
    var divNum = num1 / num2;
    alert('The Divide Number Is :' + " " + divNum);
} else if (operator == "*"){
    var  mulNum = num1 * num2;
    alert('Multiply Number Is :' + " " + mulNum);
}else{
    alert('invalid operator');
}