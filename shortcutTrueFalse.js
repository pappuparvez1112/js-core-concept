//'almas',5,true,{},[]
// '',0,false,null,undefined

//check truthy
let myVar=5;
if(myVar){
    myVar=myVar*100
}else{
    myVar=0;
}

let myMoney=50;
//you check negative or falsy anything
if(!myMoney){

}

const money=110;
let food;
if(money>100){
    food="biriyani";
}
else{
    food="cha-biskuit"
}

//ternary
let food1=money>100 ?'biriyani':'cha-biskuit';
// console.log(food1);
let drink=(money>100 && myVar>100) ? 'coke':'filter water';
// console.log(drink);

// string to number 

const input='500';
const inputNum=+input;
// console.log(inputNum);

//number to string

const num1=300;
const numSring=num1+"";
// console.log(numSring);

// truthy=1,falsy=0
const isActive=false;
const showUser=()=>'display user';

const hideUser=()=>'hide user';


const check = isActive ? showUser() : hideUser();
console.log(check);

//use && if the left side is true then right side will be executed
const check2=isActive && showUser();
console.log(check2);

//use or || if the left side is false then the right side will be executed

const check3=isActive || hideUser();
console.log(check3);

//toggle
 const check4=!isActive;
console.log(check4);