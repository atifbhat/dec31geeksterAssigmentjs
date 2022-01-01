alert(" Write a program to print all the Even Numbers less than or equal to N(N is the imput from the user)?");

var number = prompt('Enter the number');
number = parseInt(number);

var even = [];
var x = 0;
for (var i = 1; i <= number; i++) {
    if (i % 2 == 0) {
        even[x] = i;
        x++;
    }
}
console.log(even);
alert(`Even numbers are :- ${even}`);