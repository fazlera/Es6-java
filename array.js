
// our regular function declare system
// function dubleIt(num){
//     return num *2;
// }

// This is varriable function declare system

// const dubleIt = function myFun(num){
//     return num * 2;
// }

//  This is es6 function declare system
// const dubleIt = num => num * 2;
// const result1 = dubleIt;

// this is for muilti parameter
// const add = (x , y ) => x + y;
// const result2 = add(20,80);
// console.log(result2);
// this is for single parameter

// const need5000 = () => 5000;
// const result3 = need5000();
// console.log(result3)

const math = (x , y) =>{
    const sum = x + y;
    const num = x - y;
    const resultMath = sum * num;
    return resultMath;
}
const tottal = math(10 , 5);
console.log(tottal);
