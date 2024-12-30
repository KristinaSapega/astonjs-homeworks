//Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами

//1. Function Declaration
function makeCounter1() {
    return { count: 1 };
  }

  
//2. Function Expression
const makeCounter2 = function() {
    return { count: 1 };
  };

  
//3. Arrow Function
const makeCounter3 = () => ({ count: 1 });
