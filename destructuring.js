// 1. array destructuring
const numbers=[42,65];
// const x=numbers[0];
// const y=numbers[1];
// const [x,y]=[42,65];
const [x,y]=numbers;

function boxify(num1,num2){
    const nums=[num1,num2];
    return nums;
}
// const [first,last]=numbers;
const student ={
    name:'sakib',
    age:'32',
    movies:['badsha','rostom']
}
const [movie,movie2]=student.movies;
console.log(movie,movie2);

//object destructuring

const employe={
    ide:'vs code',
    designation:'developer',
    machine:'mac',
    language:['html','css','js'],
    specification:{
        height:66,
        wight:67,
        address:'kumarkhali',
        drink:'water',
        watch:{
            color:'black',
            price:500,
            brand:'casio'

        }
    }
}

const {machine,ide}=employe;
const {wight,address}=employe.specification;
const {brand}=employe.specification.watch;
console.log(brand);