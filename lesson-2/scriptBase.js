//Написать функцию getLength, принимающую на вход валидное JS значение любого типа. 
//Функция должна вывести в консоль длину (length) этого значения, если это возможно, иначе вывести в консоль 0.

function getLength(value) {
    if (value !== null && value !== undefined && typeof value.length === 'number') {
        console.log(value.length);
    } else {
        console.log(0);
    }
}

getLength([1, 2, 3, 4]);
getLength({});
getLength(null);