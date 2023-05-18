// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const strElem = ['hello world', 'lorem ipsum', 'javascript is cool'];

strElem.forEach((string) => {
    console.log(`Довжина рядка '${string}': ${string.length} символів.`);
});

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = ('hello world' , "lorem ipsum", 'javascript is cool'   );
console.log(str.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let strDown = ('HELLO WORLD', 'LOREM IPSUM' , 'JAVASCRIPT IS COOL')
console.log(strDown.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDurty = ' dirty string   ';
let cleanedStr = strDurty.split(' ').filter(Boolean).join(' ');

console.log(cleanedStr); // "dirty string"

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const string = (strr) => strr.split(' ');

let strr = 'Ревуть воли як ясла повні';
let arr = string(strr);
console.log(arr);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numb = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strings = numb.map(String);
console.log(strings);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const sortNums = (nums, direction) => {
    return nums.sort((a, b) => direction === 'ascending' ? a - b : b - a);
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending')); // [3, 11, 21]
console.log(sortNums(nums, 'descending')); // [21, 11, 3]

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];


coursesAndDurationArray.sort(function(a, b) {
    return b.monthDuration - a.monthDuration;
});
console.log(coursesAndDurationArray);


let filteredArray = coursesAndDurationArray.filter(function(course) {
    return course.monthDuration > 5;
});
console.log(filteredArray);


let transformedArray = coursesAndDurationArray.map(function(course, index) {
    return {
        id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration
    };
});
console.log(transformedArray);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
const deck = [
  { cardSuit: 'spade', value: '6', color: 'black' },
  { cardSuit: 'spade', value: '7', color: 'black' },
  { cardSuit: 'spade', value: '8', color: 'black' },
  { cardSuit: 'spade', value: '9', color: 'black' },
  { cardSuit: 'spade', value: '10', color: 'black' },
  { cardSuit: 'spade', value: 'ace', color: 'black' },
  { cardSuit: 'spade', value: 'jack', color: 'black' },
  { cardSuit: 'spade', value: 'queen', color: 'black' },
  { cardSuit: 'spade', value: 'king', color: 'black' },
  { cardSuit: 'diamond', value: '6', color: 'red' },
  { cardSuit: 'diamond', value: '7', color: 'red' },
  { cardSuit: 'diamond', value: '8', color: 'red' },
  { cardSuit: 'diamond', value: '9', color: 'red' },
  { cardSuit: 'diamond', value: '10', color: 'red' },
  { cardSuit: 'diamond', value: 'ace', color: 'red' },
  { cardSuit: 'diamond', value: 'jack', color: 'red' },
  { cardSuit: 'diamond', value: 'queen', color: 'red' },
  { cardSuit: 'diamond', value: 'king', color: 'red' },
  { cardSuit: 'heart', value: '6', color: 'red' },
  { cardSuit: 'heart', value: '7', color: 'red' },
  { cardSuit: 'heart', value: '8', color: 'red' },
  { cardSuit: 'heart', value: '9', color: 'red' },
  { cardSuit: 'heart', value: '10', color: 'red' },
  { cardSuit: 'heart', value: 'ace', color: 'red' },
  { cardSuit: 'heart', value: 'jack', color: 'red' },
  { cardSuit: 'heart', value: 'queen', color: 'red' },
  { cardSuit: 'heart', value: 'king', color: 'red' },
  { cardSuit: 'clubs', value: '6', color: 'black' },
  { cardSuit: 'clubs', value: '7', color: 'black' },
  { cardSuit: 'clubs', value: '8', color: 'black' },
  { cardSuit: 'clubs', value: '9', color: 'black' },
  { cardSuit: 'clubs', value: '10', color: 'black' },
  { cardSuit: 'clubs', value: 'ace', color: 'black' },
  { cardSuit: 'clubs', value: 'jack', color: 'black' },
  { cardSuit: 'clubs', value: 'queen', color: 'black' },
  { cardSuit: 'clubs', value: 'king', color: 'black' },
];

const spades = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spades);

const sixes = deck.filter(card => card.value === '6');
console.log(sixes);

const redCards = deck.filter(card => card.color === 'red');
console.log(redCards);

const diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);

const highClubs = deck.filter(card => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king'].includes(card.value));
console.log(highClubs);
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//
const packedDeck = deck.reduce((result, card) => {
    result[card.cardSuit].push(card);
    return result;
}, { spade: [], diamond: [], heart: [], clubs: [] });

console.log(packedDeck);



// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker



let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


const sass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(sass);

const docker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(docker);
