alert("Q1:-Minimum among the three Numbers given by the user?");

var num1 = prompt("enter the Ist number ");
var num2 = prompt("enter the 2nd number ");
var num3 = prompt("enter the 3rd number");
var num1 = parseInt(num1);
var num2 = parseInt(num2);
var num3 = parseInt(num3);
console.log(`First number is -> ${num1}  `);
console.log(`Second number is -> ${num2}  `);
console.log(`Third number is -> ${num3}  `);




if (num1 < num2 && num1 < num3) {

    alert(`${num1} is smaller`);
} else if (num2 < num1 && num2 < num3) {

    alert(`${num2} is smaller`);

} else if (num3 < num1 && num3 < num2) {
    alert(`${num3} is smaller`);

} else {
    alert(`${num1},${num2} and ${num3} are same `);
}