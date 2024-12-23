//Задание 2 – Скопировать объект counter всеми возможными способами;

// Поверхностное копирование (Создаёт новый объект и копирует в него все перечисляемые свойства из исходного объекта)
const counter = { count: 0 };
const copy = Object.assign({}, counter);


//C использованием спред-оператора
const counter1 = { count: 0 };
const copy1 = { ...counter1 };


//Глубокое копирование через JSON.stringify() и JSON.parse() (Преобразует объект в строку JSON и затем обратно в объект)
const counter2 = { count: 0 };
const copy2 = JSON.parse(JSON.stringify(counter2));


//C помощью рекурсии
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}
const counter3 = { count: 0 };
const copy3 = deepCopy(counter3);


//Через structuredClone()
const counter4 = { count: 0 };
const copy4 = structuredClone(counter4);


//С использованием библиотеки (lodash)
const _ = require('lodash'); 
const counter5 = { count: 0 };

const copy5 = _.cloneDeep(counter5);

