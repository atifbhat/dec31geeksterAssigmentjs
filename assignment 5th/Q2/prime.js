alert("Take n from the User and print prime numbers upto n ?");

var number = prompt('Enter the number');
number = parseInt(number);




var prime = [];
var x = 0;

for (let i = 1; i <= number; i++) {

    let flag = 0;


    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }


    if (i > 1 && flag == 0) {


        prime[x] = i;
        x++;

    }
}

alert(prime);