alert("Enter three number to check the maximum among the given number?");
var num1 = prompt("Enter a Value");
num1 = parseInt(num1);
var num2 = prompt("Enter a Value");
num2 = parseInt(num2);
var num3 = prompt("Enter a Value");
num3 = parseInt(num3);


if (num1 > num2 && num1 > num3) {

    alert("num1 is greater ");
}


if (num2 > num1 && num2 > num3) {

    alert("num2 is greater ");

}

if (num3 > num1 && num3 > num2) {
    alert("num3 is greater ");

}