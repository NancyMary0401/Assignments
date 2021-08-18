const prompt=require("prompt-sync")({sigint:true});

let farenhiettocelcius=function(F){
      let C = 5/9 * (F-32)
      return C
}
let celciustofaren=function(C){
      let F =(C * 9/5) + 32 
      return F
}
let F=prompt('Enter the Temperature in Farenhiet : ')
let tempone=farenhiettocelcius(F)
console.log(`${tempone}F`)
let C =prompt('Enter the Temperature in celcius : ')
let celone=celciustofaren(C)
console.log(`${celone} C`)