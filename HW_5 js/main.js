// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let functionOne = (a, b) => a * b;
console.log(functionOne(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let func2 = r => 2 * r**r * Math.PI
console.log(func2(6))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let functionThree = (h, r) => 2 * h * r *Math.PI;
console.log(functionThree(12, 15));


// - створити функцію яка приймає масив та виводить кожен його елемент
const array = [12, 56, 'false', true];

const functionFive = (arr) => {
    for (const item of arr) {
        console.log(` ${item}`);
    }
};

functionFive(array);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let functionSix = (text,) => {
    document.write(`<p> ${text} <p>`)
}
functionSix('Hello OKTEN')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let functionSeven = (li) =>{

    document.write(`
        <ul>
            <li>${li}</li>
            <li>${li}</li>
            <li>${li}</li>
        </ul>
    `);}

functionSeven('Some text for li')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


const functionEight = (text, count) => {
    let eight = `<ul>`;
    for (let i = 0; i < count; i++) {
        eight += `<li>${text}</li>`;
    }
    eight += `</ul>`;
    document.write(eight);
};

functionEight('HELLO', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrayNine = [12, 44, false, true, 'cat', 'okten'];

let functionNine = (arrayNine) => {

    document.write(`<ul>`);
    for (const item of arrayNine) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}

functionNine (arrayNine)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

const usersTen = [{ id : 12, name:'Andry', age: 23},{ id : 1, name:'Lera', age: 22},{ id : 20, name:'Olesya', age: 40}]

 let functionTen = (arr) => {

    for (const user of arr) {
        document.write(`<div>id: ${user.id} - name: ${user.name} - age: ${user.age}</div>`);
    }

}
functionTen(usersTen);


// - створити функцію яка повертає найменьше число з масиву
let functionTh = (arrRy) => {

    let min = arrRy[0];
    for (let i = 1; i < arrRy.length; i++) {
        if (arrRy[i] < min) {
            min = arrRy[i];
        }
    }
    return min;
};

let numbers = [13, 45, 0, 80, 5];
console.log(functionTh(numbers));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
 let sum = (arr)  => {
     let result = 0;
     for (const number of arr) {
         result += number;
     }
     return result;

}
console.log(sum([54, 22, 100]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    return arr;
};

console.log(swap([11, 22, 33, 44], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let functionF = (sumUAH, currencyValues, exchangeCurrency) => sumUAH / currencyValues[exchangeCurrency];

let currencyValues = {
    USD: 38,
    EUR: 40,
};

let sumUAH = 1000;
let exchangeCurrency = 'USD';

let sumExchange = functionF(sumUAH, currencyValues, exchangeCurrency);
console.log(sumExchange);



