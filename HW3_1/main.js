/*--створити масив з:
 - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/


const num = [23, 13, 10, 14, 90];
console.log(num);

const str = ['css', 'js','okten', 'school','study'];
console.log(str);

const arr = [ 23, 13,  'css', true, false];
console.log(arr);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

const full = [ 12, 23,'May', true ,false, 'spring', 67,'summer'];
console.log(full[2]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*- є масив [2,17,13,6,22,31,45,66,100,-18] :
1. перебрати його циклом while*/

const nmb = [2,17,13,6,22,31,45,66,100,-18]
let i = 0

while (i<nmb.length){
    console.log(nmb[i]); i++
}

// 2. перебрати його циклом for

const nmbFor = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < nmbFor.length ; i++) {
    console.log(nmbFor[i])

}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
const tWhile = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let l = 0
while (l<tWhile.length){
    if (tWhile[l] % 2 !== 0) {
        console.log(tWhile[l]);
    }
    l++;
}


// перебрати циклом for та вивести  числа тільки з непарним індексом
const tFor = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];


for (let i = 0; i < tFor.length; i++) {
    if (tFor[i] % 2 !== 0) {
        console.log(tFor[i]);
    }
}


// 5. перебрати циклом for та вивести  числа тільки парні  значення
const array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}


// 6. перебрати циклом while та вивести  числа тільки парні  значення


const two = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
let k = 0

while (k<two.length){
    if (two[k] % 2 ===0){
        console.log(two[k]);
    }
    k++;
}


// 7. замінити кожне число кратне 3 на слово "okten"

let seven = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = 0; i < seven.length; i++) {
    if (seven[i] % 3 === 0) {
        seven[i] = "okten";
    }
}
console.log(seven);


// 8. вивести масив в зворотньому порядку.
let myArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let reversedArray = myArray.reverse();

console.log(reversedArray);



// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let arR = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let x = arR.length - 1; x >= 0; x--) {
    console.log(arR[x]);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

const nmBRS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nmBRS);


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

const sTring =  ['name', 'age','school','own','okten','lera','andry','mom','dad','vinchi']
console.log(sTring);

const all = [1, 2, 3, 4,'name', 'age','school', false]
console.log(all)


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arrMy = [false, 2, 3, true, 'name', 'age', 'school', false];

for (let i = 0; i < arrMy.length; i++) {
    if (typeof arrMy[i] === 'boolean') {
        console.log(arrMy[i]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arrMyy = [false, 2, 3, true, 'name', 'age', 'school', false];

for (let i = 0; i < arrMyy.length; i++) {
    if (typeof arrMyy[i] === 'number') {
        console.log(arrMyy[i]);
    }
}


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arrrMyy = [false, 2, 3, true, 'name', 'age', 'school', false];

for (let i = 0; i < arrrMyy.length; i++) {
    if (typeof arrrMyy[i] === 'string') {
        console.log(arrrMyy[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


const name = []
name[0]='name' ;
name[1]='nameuser' ;
name[2]='forest' ;
name[3]='true' ;
name[4]= 13 ;
name[5]= 22 ;
name[6]='name' ;
name[7]='iwn' ;
name[8]=10 ;
name[9]= false ;

for (let j = 0; j < name.length; j++) {
    console.log(name[j])

}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i<=10; i++){
    console.log(i);
    document.write(i)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i<=100; i++) {
    console.log(i);
    document.write(`<div>${i}<br></div`);

}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 2; i<=100; i++) {
    console.log(i);
    document.write(`<div>${i}<br></div`);

}


for (let i = 0; i<=100; i++) {

    console.log(i);
    document.write(`<div>${i}<br></div`);
    i+=1


}


for (let i = 0; i<=100; i++) {

    console.log(i);
    document.write(`<div>${i}<br></div`);
    i+=1


}


for (let i = 1; i<=100; i++) {

    console.log(i);
    document.write(`<div>${i}<br></div`);
    i+=1


}

