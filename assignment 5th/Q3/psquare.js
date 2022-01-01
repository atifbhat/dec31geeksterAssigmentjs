alert("Take number from the User and check the given number is perfect square or not ?");

var number = prompt('Enter the number');
number = parseInt(number);

var squareroot = Math.sqrt(number);
let value = Math.floor(squareroot);




if (value * value == number) {
    alert("perfect square");
} else {

    alert("not a perfect square");

}