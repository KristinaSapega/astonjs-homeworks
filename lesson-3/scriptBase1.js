//Задание 1 – Создать объект counter всеми возможными способами;

//Литеральная форма
const counter0 = {
    count: 0,
};


//через new Object()
const counter1 = new Object();
counter1.count = 0;


//Функция-конструктор
function Counter() {
    this.count = 0;
}
const counter2 = new Counter();


//Класс
class Counter {
    constructor() {
        this.count = 0;
    }
}
const counter3 = new Counter();


//Object.create()
const proto = { count: 0 };
const counter4 = Object.create(proto);


//Object.defineProperty()
const counter5 = {};
Object.defineProperty(counter5, 'count', {
    value: 0,
    configurable: true,
    enumerable: true,
    writable: true,
});


//Object.assign()
const counter6 = Object.assign({}, { count: 0 });


