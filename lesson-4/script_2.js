//Привязать контекст объекта:
//const obj = { item: 'some value' }
//к функции logger:
//function logger() {
// console.log(`I output only external context: ${this.item}`);
//}
//так, чтобы при вызове функции ${this.item} имело значение - 'some value'(Привязать через bind, call, apply)

// 1. Использование bind:
// Используется для создания новой функции с фиксированным контекстом

const obj = { item: 'some value' };

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const boundLogger = logger.bind(obj);

boundLogger();



// 2. Использование call:
// Используется, если функцию нужно вызвать сразу с заданным контекстом.

const obj1 = { item: 'some value' };

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

logger.call(obj1);



// 3. Использование apply:
// Как и call, вызывает функцию сразу, но аргументы передаются массивом.

const obj3 = { item: 'some value' };

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

logger.apply(obj3); 
