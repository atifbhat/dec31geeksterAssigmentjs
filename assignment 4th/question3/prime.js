alert("Write a program to take an input from the user (Num) and check whether it is a Prime or Not?");

var number = prompt('Enter the number');
number = parseInt(number);
let isPrime = 'True';

if (number === 1) {
    alert("1 is neither prime nor composite number.");
    console.log("1 is neither prime nor composite number.");
} else if (number > 1) {

    for (i = 2; i < number; i++) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }



        }
    }

    if (isPrime) {
        alert(`${number} is  prime`);
    } else {
        alert(`${number} is not prime`);
    }


}