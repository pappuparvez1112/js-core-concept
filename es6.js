const number=[90,88,99];
const student ={
    name:'sakib',
    age:'32',
    movies:['badsha','rostom']
};

// 1.Template string
const about=`My name is ${student.name} age of ${student.age} has number of ${number[1]} also like movies ${student.movies[1]}`;
console.log(about);

// arow function
const getFiftyFive=()=>55;
const addSixty=num=>num+65;
//[
const isEven=x=>x%2==0;
const output1=isEven(3);
console.log(output1);
// ]
const addThree=(x,y,z)=>x+y+z;
const doMath=(num1,num2)=>{
    const sum=num1+num2;
    return sum;
}
const output2=doMath(20,22);
console.log(output2);

//spread operator
const newNumber=[...number];
const currentNumber=[...number,33];
number.push(11);
number.push(11);
number.push(11);


console.log(number);
console.log(newNumber);

console.log(currentNumber);
