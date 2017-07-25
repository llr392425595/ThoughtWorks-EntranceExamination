let Person = require('./person')
// Write your code here

//class继承
class Student extends Person{
    //构造函数
    constructor(name,age,klass){
        //调用实现父类的构造函数
        super(name,age);
        this.klass=klass;
    }

    introduce(){
        return 'My name is ' + this.name+'. I am ' + this.age + ' years old. I am a Student. I am at Class '+this.klass+'.'
    }
}
module.exports = Student
