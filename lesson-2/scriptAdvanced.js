//Написать функцию compare, принимающую на вход два объекта Node, и возвращающую true,
// если они имеют одинаковую структуру и значения и false в ином случае. 
//Дан объект Node со структурой ’Tree’

//Node:
//value: <number>,
//left: <Node> | undefined,
//right: <Node> | undefined

function compare (nodeA, nodeB) {
    //и то, и другое должно быть истинным
    if(nodeA === undefined && nodeB === undefined) {
        return true;
    }
    //либо одно, либо другое, либо оба
    if(nodeA === undefined || nodeB === undefined) {
        return false;
    }
    if(nodeA.value != nodeB.value) {
        return false;
    }
    return compare(nodeA.left, nodeB.left) && compare(nodeA.right, nodeB.right);

}

const A = { value: 1, left: { value: 2 }, right: { value: 3 } };
const B = { value: 1, left: { value: 2 }, right: { value: 3 } };

console.log(compare(A, B)); // true
