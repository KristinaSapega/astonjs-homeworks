//Создать объект Person несколькими способами, 
//после создать объект AnotherPerson, чтобы в нём были доступны методы объекта Person. (механизм наследования)
//Добавить метод logInfo чтоб он был доступен всем объектам. 


// Способ 1: Создание объекта Person с использованием объектного литерала
const Person = {
    name: 'Вася',
    age: 25,
    greet() {
        console.log(`Hi, my name is ${this.name}`);
    }
};

// Способ 2: Создание объекта Person через функцию-конструктор
function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
}

//Добавляем методы в прототип функции-конструктора
PersonConstructor.prototype.greet = function () {
    console.log(`Hi, my name is ${this.name}`);
};

// Способ 3: Создание объекта Person через class
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

//Создание объекта AnotherPerson, чтобы в нём были доступны методы объекта Person
const AnotherPerson = Object.create(Person); 
AnotherPerson.name = 'Петя';
AnotherPerson.age = 30;

//Добавление метода logInfo, доступного всем объектам
Object.prototype.logInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

//Проверка
const person1 = new PersonConstructor('Маша', 28);
const person2 = new PersonClass('Катя', 32);

Person.greet();
AnotherPerson.greet();

person1.logInfo();
person2.logInfo();
AnotherPerson.logInfo();
