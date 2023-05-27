class parent{
    constructor(){
        this.fatherName = 'gaza khan'
    }
}

class Child extends parent {
    constructor(Name){
        super ();
        this.Name = Name;

    }
}
const baby = new Child('gaza');
const baby2 = new Child('khaza');
console.log(baby,baby2);