// 1.how to declare variable using let ,const
const brother='Ahamed'
let season='summer'
season='winter'

// 2.conditions
// 6 basic conditions : >,<,===,!==,<=,>=
//multiple conditions:&& ,||

if(brotherName === 'ahamed' || season === 'rainy'){

}
else if(brotherName === 'ahamed'){

}
else{

}

// 3. array
// index
// length ,push

const number=[90,88,99];
number[0]=58;

// 4. for loop 

for(let i=0;i<number.length;i++){
    const newNumber=number[i];
    console.log(newNumber);
}

// 5. function

function multiply(num1,num2){
    const result=num1*num2;
    return result;
}
const output=multiply(30,55);
console.log(output);

// 6. object

const student ={
    name:'sakib',
    age:'32',
    movies:['badsha','rostom']
}
const myVariable='age'
console.log(student.age); //direct access by property
console.log(student['age']); //access via property name string
console.log(student[myVariable]); // access via property name in a variable
