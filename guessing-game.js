const prompt=require("prompt-sync")({sigint:true});
let min=1;
let max=10;
let randomNum=Math.floor(Math.random()*(max - min + 1))+min;
let guess=function(){
    let num=Number(prompt('guess a number from 1 to 10: '));
    if (num===randomNum){
        console.log(`Ur guess ${num} is correct`);
    }else if (num < randomNum){
        console.log(`${num} is lesser than the genereated number`);
        guess();
    }
    else {
        console.log(`${num} is greater than the generated number`);
        guess();
    }
}
guess();