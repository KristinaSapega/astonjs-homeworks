//Создать класс SuperPerson c методами get и set для поля name и конструктором, 
//сделать класс наследник от класса SuperPerson.


class Person {
    constructor(name, age) {
      this._name = name; //_name для хранения приватного значения
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (typeof value === 'string' && value.trim().length > 0) {
        this._name = value;
      } else {
        console.error('Недопустимое имя.');
      }
    }
    
    logInfo() {
      return `Name: ${this._name}. Age: ${this._age}.`;
    }
  }
  
  //Наследник
  class PersonThree extends Person {
    constructor(name) {
      super(name);
    }
  
    //геттеры, сеттеры, logInfo уже доступен из родительского класса
  }
  
  //Проверка
  const person = new Person('Вася', 25);
  console.log(person.logInfo());
  
  const personThree = new PersonThree('Петя', 30);
  console.log(personThree.logInfo()); 
  
  personThree.name = 'Маша';
  personThree.age = 35;
  console.log(personThree.logInfo());
  