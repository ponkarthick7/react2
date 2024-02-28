class person{
    constructor(){

        this.name="Ponkarthick";
        this.age=26;
    }
    greet(){
        return `Hello my name is ${this.name} I am ${this.age}`;
    }
}
let person1=new person();
console.log(person1.greet());