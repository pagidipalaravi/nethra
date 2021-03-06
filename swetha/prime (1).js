/*Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. 
The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. */

function PrimeMover() { 
   num = document.getElementById("input").value;
   var p ;
  if(num==1){
	  
     p = 2;
  }
  if(num==2){
     p = 3;
  }
  var primes=1;
  for(var i=3; i<10000; i++){
    var prime=0;
      for(var j=2; j<i; j++){
        if(i%j==0){
          prime++;
        }
      }
      if(prime==0){
        primes++;
      }
     if(primes== num){
        document.getElementById("output").innerHTML = i ;
      }
  }  
}

const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;