// 1. json=> stringify,parse.

const student ={
    name:'sakib',
    age:'32',
    movies:['badsha','rostom']
}
const studentJson=JSON.stringify(student);
// console.log(student);
// console.log(studentJson);
const studentObject=JSON.parse(studentJson);
// console.log(studentObject);

// 2. fetch

// fetch('url')
//      .then(res=>res.json())
//      .then(data=>console.log(data));

// 3. object = keys and values

const keys=Object.keys(student);
const values=Object.values(student);
console.log(values);

// 4.for 

const numbers=[22,23,24,27,28];
numbers.forEach(num=>console.log(num));
const checkNumber=numbers.map(num=>num*2);
console.log(checkNumber);

// for of on array like object
//loop on an object using for in

// add or remove from an array
const products=[
    {name:'laptop',price:3200,brand:'lenevo',color:'silver'},
    {name:'phone',price:7000,brand:'iphone',color:'golden'},
    {name:'watch',price:3000,brand:'casio',color:'yellow'},
    {name:'sunglass',price:300,brand:'rayben',color:'black'},
    {name:'camera',price:9000,brand:'canon',color:'gray'}
];

const addProduct={name:"webcam",price:7000,brand:"lal"};

// copy products array and then add newProduct

const newProducts=[...products,addProduct];
console.log(newProducts);

//create a new array without one specific item 
//remove phone means create a new array without the phone

const remaining=newProducts.filter(p=>p.name !== 'phone');
console.log(remaining);
