const prompt =require("prompt-sync")({sigint:true})
function factorial(n){
  if(n == 0 || n == 1){
      return 1;
  }else{
      return n * factorial(n-1);
  }
}
let n = parseInt(prompt('enter a positive integer'));
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);