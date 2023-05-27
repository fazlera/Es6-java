const numbers = [3,4,5,6,9,7,8,2,]
const result = numbers.map(x => x * x);
const bigger = numbers.filter(x => x > 5 );
const isthere = numbers.find(x => x > 5 );
console.log(result);
console.log(bigger);
console.log(isthere);