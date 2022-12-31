const products=[
    {name:'laptop',price:3200,brand:'lenevo',color:'silver'},
    {name:'phone',price:7000,brand:'iphone',color:'golden'},
    {name:'watch',price:3000,brand:'casio',color:'yellow'},
    {name:'sunglass',price:300,brand:'rayben',color:'black'},
    {name:'camera',price:9000,brand:'canon',color:'gray'}
];
// 1. map
const brands=products.map(p=>p.brand);
// console.log(brands);

// 2.forEach dont return anything
products.forEach(p=>console.log(p.color));

// 3.filer for applying condition and its return an array 
const cheap=products.filter(p=>p.price <=5000);
console.log(cheap);
const speceficName=products.filter(p=>p.name.includes('n'));
console.log(speceficName);

// 4. find .to finding first element of n .and its return an object

const special=products.find(p=>p.name.includes('n'));
console.log(special);



