alert("Take N numbers from User and find Max Using an Array");
var arrsize = prompt('Enter the size of an array');
arrsize = parseInt(arrsize);
var arr = [];



for (var i = 0; i < arrsize; i++)

{

    z = i + 1;
    x = prompt(`Enter the ${z} element of an Array`);
    x = parseInt(x);
    arr.push(x);
    x++;

}

greatest = 0;

for (j = 0; j < arrsize; j++) {

    if (arr[j] > greatest) {

        greatest = arr[j];

    }




}

alert(greatest);
console.log(greatest);