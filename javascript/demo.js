let x = 23
let y = 12
let z = x + y
let array1 = ['a',2, 'b', 'c', 5]//array
const person = { //object
    name: 'festy Samson',
    age: 22,
}
if(x>y){
    console.log("let the value of x + y = " +z)
} else{
    if (x<y){
        y = x+2
        console.log(`y equals x + 2 and the result is ${y}` )
    }else{
        console.log(`x and y are equal`)
    }
}
array1[0] = 'man'
array1[1] = 'chelsea'
alert(`hey programmers`)
console.log(array1)
console.log(person.name.split(" "))

//fuction part. with no parameter
function calc(){
    return "our fisrt comment"
}
txt = calc()//to call back a function always put the ()
console.log(calc());
//function with parameter
function nameToText(name){
    let Name = name// we dont actually needs this line sha 
    return `${name} is quite good`
}
console.log(nameToText(`FESTY`))
// QUADRATIC FUNCTION
function sqrot(val1, val2){// this place holds sqrt(b^2-4ac)
    if(val1 - val2 < 0){
        return undefined
    }
    return Math.sqrt(val1 - val2) ;//
}
function quadEqn (a, b, c){
    const d = b*b;
    const e = 4*a*c;
    const f = 2 * a;
    const h = sqrot(d,e);//h will take function sqrot
    let x1 ;
    let x2 ;
    if (h != undefined){
        x1 = (-b + h)/f;
        x2 = (-b - h)/f;
    }
    return [x1, x2];
}
console.log(quadEqn(1,4,3))
// loop
/*
let b = 4;
while( b <=20){
    console.log(`b is :`)
     console.log(b)
     b = b + 2*/
// arrow function
const sayname = (name) => {alert(`Hello ${name}`)};
sayname(`festy`)
//implicit function doesnt use the return statement
const race = '200m dash';
const winners = ['NORA', 'SANDRA', 'KATE'];
const win = winners.map((winners, i)=>
({name:winners, race:race, place: i + 1}))// this is the return line
//for loop
let sum = 0
for(let i = 0; i <= 100; i += 2){
    console.log(i)
}