const idNumber = [14,15,16,17,18,21,14,];
const idNumber2 = [15,13,19,11,16,21,14,];
const idNumber3 = [15,13,19,11,16,21,14,];
// const total = idNumber.concat(idNumber2) .concat([45]). concat(idNumber3);
const total2 = [...idNumber,...idNumber2,45,...idNumber3];
console.log(total2);

const gaza = 650;
const raza = 550;
const kaza = 750;
const allProfit = [650,750, 850, 950, 760, 880,]
// const maxmum = Math.max(gaza , raza, kaza);
const maxmum2 = Math.max(...allProfit);
console.log(maxmum2);