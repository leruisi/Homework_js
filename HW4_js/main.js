// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
 function calc (a,b) {
    let result = a+b;
    return result;

 }
 let x = calc(20,30)
console.log(x)


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calcRadius (r) {
    let radius = Math.PI*(r*r);
    return radius;

}
let a = calcRadius(6)
console.log(a)




// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calcCilinder (h,r) {
    let resultCilinder =2*Math.PI*r*h ;
    return resultCilinder;

}
let b = calcCilinder(10,20)
console.log(b)




// - створити функцію яка приймає масив та виводить кожен його елемент
let myArr = [23,13,true]
arr(myArr);
   function arr (myArr){
       for (let i = 0; i < myArr.length; i++) {
           console.log(myArr[i])
       }
}



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function par (teg){
    document.write('<div>');
    document.write(`<p> ${teg}</p>`);
    document.write('</div>');

}

par ('some text');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulLi (teg){
    document.write('<ul>');
    document.write(`<li> ${teg}</li>`);
    document.write('</ul>');

}

ulLi ('some text');
ulLi('Some Text');
ulLi('Text Some');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list2(text, num) {

    document.write('<ul>');
        for (let i = 0; i < num; i++) {
            document.write(`<li>${text}</li>`)
        }

        document.write('</ul>');
}

list2('hhh',4)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


function buildList(arr) {

    let list = '<ul>';

    // проходимось по кожному елементу масиву
    for (let i = 0; i < arr.length; i++) {

        list += '<li>' + arr[i] + '</li>';
    }

    list += '</ul>';

    return list;
}
let aRr = [11, 27, 30, 'okten', 'school', true, false];
let list = buildList(aRr);
console.log(list);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// ------


// - створити функцію яка повертає найменьше число з масиву

function findMin(arrRy) {
    let min = arrRy[0];
    for (let i = 1; i < arrRy.length; i++) {
        if (arrRy[i] < min) {
            min = arrRy[i];
        }
    }
    return min;
}
const numbers = [3, 8, 2, 10, 5];
console.log(findMin(numbers));

const numbers2 = [1, 0, -5, 3];
console.log(findMin(numbers2));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    return arr.reduce(function(total, current) {
        return total + current;
    });
}
let numBers = [4, 8, 12, 50, 10, 3];
let total = sum(numBers);
console.log(total);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
let fruits = ['home', 'index', 'school', 'peach'];
swap(fruits, 1, 2);
console.log(fruits);


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {

    let exchangeRate = currencyValues[exchangeCurrency];
    let sumExchange = sumUAH / exchangeRate;
    return  sumExchange;
}
let currencyValues = {
    USD: 38,
    EUR: 40,
};

let sumUAH = 1000;
let exchangeCurrency = 'USD';

let sumExchange = exchange(sumUAH, currencyValues, exchangeCurrency);
console.log(sumExchange); // виведе 36.36363636363637
