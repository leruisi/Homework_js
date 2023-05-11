/* Масиви та об'єкти:
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/

let masTen = [10,567,true,'okten',89,false,'seven','hello',321,22]
console.log(masTen[0])
console.log(masTen[1])
console.log(masTen[2])
console.log(masTen[3])
console.log(masTen[4])
console.log(masTen[5])
console.log(masTen[6])
console.log(masTen[7])
console.log(masTen[8])
console.log(masTen[9])

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let obj_1 = {

    title:'1984',
    pageCount: 345,
    genre: 'dystopia novel'

}
console.log(obj_1)


let obj_2 = {
    title:'Wills',
    pageCount: 500,
    genre: 'novel'}

console.log(obj_2)



let obj_3 = {
    title:'Invisible',
    pageCount: 600,
    genre: 'novel'}

console.log(obj_3)



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.



let book_1 = {

    title:'1984',
    pageCount: 345,
    genre: 'dystopia novel',
    autors: ['Andry', 21]

}
console.log(book_1["autors"])


let book_2 = {
    title:'Wills',
    pageCount: 500,
    genre: 'novel',
    autors: ['Andry', 22]

}


    console.log(book_2.autors)



let book_3 = {
    title:'Invisible',
    pageCount: 600,
    genre: 'novel',
    autors: ['Andry', 23]
}

console.log(book_3.autors)



// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const userArr = [
    { name: 'user1', username: 'Popov', password:'123345'},
    { name: 'user2', username: 'Popov', password:'123345'},
    { name: 'user3', username: 'Popov', password:'123345'},
    { name: 'user4', username: 'Popov', password:'123345'},
    { name: 'user5', username: 'Popov', password:'123345'},
    { name: 'user6', username: 'Popov', password:'123345'},
    { name: 'user7', username: 'Popov', password:'123345'},
    { name: 'user8', username: 'Popov', password:'123345'},
    { name: 'user9', username: 'Popov', password:'123345'},
    { name: 'user10', username: 'Popov', password:'123345'}]





console.log(userArr[0].password)
console.log(userArr[1].password)
console.log(userArr[2].password)
console.log(userArr[3].password)
console.log(userArr[4].password)
console.log(userArr[5].password)
console.log(userArr[6].password)
console.log(userArr[7].password)
console.log(userArr[8].password)
console.log(userArr[9].password)









// Логічні розгалуження:
    // - Є змінна х, якій ви надаєте довільне числове значення.
//     // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

    let numberOne = +prompt('Check number');
console.log(number);
if (numberOne !== 0)
{
    document.write('<div>Вірно</div>');
} else {
    document.write('<div> yt Вірно</div>');

}




let numberTwo = +prompt('Check number');
console.log(numberTwo);
if (numberTwo !== 1)
{
    document.write('<div>Вірно</div>');
} else {
    document.write('<div>Не вірно</div>');



}
let numberThree = +prompt('Check number');
console.log(numberThree);
if (numberThree !== -3)
{
    document.write('<div>Вірно</div>');
} else {
    document.write('<div>Не вірно</div>');
}
/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/


let time = +prompt('Check number');
let time = 17
// console.log(min);
if (time >= 0 && time <= 14)
    alert('В першу чверть');


if (time >= 15 && time <= 30) {
    alert('В другу чверть');
}
if (time >= 31 && time <= 45) {
    alert('В третю чверть .');
}
if (time >= 46 && time <= 59) {
    alert('В четверту чверть.');
}


// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = 25;


if (day >= 0 && day <= 10)
    alert('В першу декаду місяця');


if (day >= 11 && day <= 20) {
    alert('В другу декаду місяця');
}
if (day >= 21 && day<= 31) {
    alert('В третю декаду місяца');
}

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let week = +prompt('Введіть порядковий номер дня тижня')

switch (week){
    case 1:
        console.log('Monday');
        break;

    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;

    default:
        console.log('Enter number from 1 to 7');
}


/*- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/


let firstNum = +prompt('Введіть довільне число')
let secondNum = +prompt('Введіть довільне число')

    if (firstNum > secondNum){
        console.log(firstNum)
    }
    else if ( firstNum == secondNum){
        console.log('Числа рівні')
    }

    else {
        ( firstNum<secondNum)

        {  console.log(secondNum)}


    }


/* є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)*/


let x = 'value';
if (x === NaN || x=== ''|| x=== 1 || x === undefined || x === null || x=== false);
x='default'

{
console.log(x)}




// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];















