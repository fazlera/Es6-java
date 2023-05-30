const normalParson = {
    firstName: 'apple',
    lastName : ' khan',
    salary   : 15000,

    getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    chargeCutting: function(amount , tips, tax){
        this.salary = this.salary - amount -tips -tax;
        return this.salary;
    }
}
const hebbyParson = {
    firstNmae:'khaza',
    lastName : 'khan',
    salary   : 25000,
}
const jhamelaParson = {
    firstNmae:'Maza',
    lastName : 'khan',
    salary   : 35000,
}

// const hebbyParsonCharge = normalParson.chargeCutting.bind(hebbyParson);
// hebbyParsonCharge(5000);
// hebbyParsonCharge(2000);
// console.log(hebbyParson.salary);

// const jhamelaParsonCharge = normalParson.chargeCutting.bind(jhamelaParson);
// jhamelaParsonCharge(10000);
// console.log(jhamelaParson.salary)

// const charge = normalParson.chargeCutting(500);
// const charge2 = normalParson.chargeCutting(5000);
// console.log(charge,charge2);
// console.log(normalParson.chargeCutting);

// normalParson.chargeCutting.call(hebbyParson,1500,500,60);
// console.log(hebbyParson.salary);

// normalParson.chargeCutting.call(jhamelaParson,5500,500,180);
// console.log(jhamelaParson.salary);
// console.log(normalParson.salary);
// console.log(hebbyParson);

normalParson.chargeCutting.apply(hebbyParson,[5000,2000,350]);
normalParson.chargeCutting.apply(jhamelaParson,[7000,3000,650]);
console.log(hebbyParson);
console.log(jhamelaParson);
