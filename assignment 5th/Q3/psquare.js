
var number =prompt('Enter the number');
number=parseInt(number);

var squareroot = Math.sqrt(number);
let value= Math.floor(squareroot);
            
            
  
 
            if(value*value== number){
                console.log("perfect square");
            }

            else{

                console.log("not a perfect square");

            }