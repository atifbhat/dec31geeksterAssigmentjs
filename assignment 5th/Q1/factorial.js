alert("Factorial of a number given by the User?");

var number = prompt("Enter the number to find the factorial of ?");
number = parseInt(number);

if (number < 0) {
    console.log(' Factorial for negative number does not exist.');
    alert(' Factorial for negative number does not exist.')
} else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
    alert(`The factorial of ${number} is 1.`);
} else {
    let fact = 1;

    for (i = 1; i <= number; i++) {
        fact = fact * i;
    }

    console.log(`The factorial of ${number} is ${fact}.`);
    alert(`The factorial of ${number} is ${fact}.`);
}