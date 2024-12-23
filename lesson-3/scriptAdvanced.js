//Задание 1 – Развернуть строку в обратном направлении при помощи методов массивов:
//function reverseStr(str) {
//return …
//}

//1
function reverseStr(str) {
    return str.split('').reverse().join('');
}


//2. c помошью цикла
function reverseStr(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

  
//3. reduce (Метод массива, который итеративно обрабатывает элементы массива и вычисляет итоговое значение)
function reverseStr(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
  }
//reversed — текущая строка в обратном порядке (накопитель).
//char — текущий символ массива, который передаётся в функцию-обработчик на каждой итерации метода reduce.
//Логика: К текущему символу char добавляется уже накопленная строка reversed. Это создаёт эффект "разворачивания".

  
//4. spread
const reverseStr = str => [...str].reverse().join('');


//5. метод forEach
const reverseStr = str => {
    let res = '';
    str.split('').forEach(char => res = char + res);
    return res;
  };
  
