class Person{
    constructor(name="default_name",age=0){
        this.name=name;
        this.age=age;
    }

    getGreetings(){
        return this.name;
    }
}

class Student extends Person{
    constructor(name,age,subject="undecided"){
        super(name,age);
        this.subject=subject;
    }

    getGreetings(){
        return super.getGreetings();
    }
}

let me=new Student("kushagra",23,"coding");
console.log(me.getGreetings());

let other=new Student("kush");
console.log(other.getGreetings());