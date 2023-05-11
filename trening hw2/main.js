// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const obj_1 = {
   title: "String",
    pageCount: 1233,
    genre: 'novel'

}
console.log(obj_1)

const obj_2 = {
    title: "String",
    pageCount: 1233,
    genre: 'novel'

}
console.log(obj_2)

const obj_3 = {
    title: "String",
    pageCount: 1233,
    genre: 'novel'

}
console.log(obj_3)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


const book_1 = {
    title: "String",
    pageCount: 1233,
    genre: 'novel',
    autors: [ {name: 'Andry', age:21       } ]
}

console.log(book_1.autors)
const book_2 = {
    title: "String",
    pageCount: 1233,
    genre: 'novel',
    autors: [ {name: 'Andry', age:21       } ]}
console.log(book_2.autors)




const book_3 = {
    title: "String",
    pageCount: 1233,
    genre: 'novel',
    autors: [ {name: 'Andry', age:21       } ]
}
console.log(book_3.autors)



// Логічні розгалуження:
    // - Є змінна х, якій ви надаєте довільне числове значення.
    // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3



const x = +prompt('Введіть довідьне число');

if (x !== 0  ) {
    console.log(' вірно')

}
else { console.log('Не вірно');
}


/*Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/


let xx = 61 ;

if (xx >=0 &&  xx <= 15){
    console.log('перша чверть')}

if (xx >=16 &&  xx <= 30){
    console.log('друга чверть')
}


if (xx >=31 &&  xx <= 40){
    console.log('третя чверть')
}


if (xx >=45 &&  xx <= 59 ){
    console.log('четверта чверть')
}



else {
console.log('Введіть коректне число')

}


// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = 30;

if ( day >=1 && day <=10    ){
    console.log('first')
}

if (day >=11 && day <=20    ){
    console.log('second')}

if (day >=21 && day <=31 ){
    console.log('thirty')
}

else{
    console.log('Error')
}

// тернарний способ - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)



let test = false

test ? console.log('Вірно') : console.log('Неправильно')


    // - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let num = +prompt('number')

num >0 ? console.log('positiv') : num <0 ? console.log('negativ') : console.log( '=0')









