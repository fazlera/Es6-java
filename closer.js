function add(){
    let count= 0;
    return function(){
        count++;
        return count;
    }
}

const first1 = add();
console.log(first1());
console.log(first1());
console.log(first1());
console.log(first1());

const first2 = add();
console.log(first2());
console.log(first2());
console.log(first2());

const first3 = add();
console.log(first3());
console.log(first3());
console.log(first3());
console.log(first3());
console.log(first3());
console.log(first3());
