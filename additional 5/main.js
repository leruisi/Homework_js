// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const funcMin = (a, b, c) => {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
};

console.log(funcMin(39, 18, -1));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const funcMax = (a, b, c) => {
    let min = a;
    if (b > min) {
        min = b;
    }
    if (c >min) {
        min = c;
    }
    return min;
};

console.log(funcMax(100, 1000, 199999));

let arrMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < max) {
            max = arr[i];
        }
    }
    return max;
};

let arr = [2, 3, 4, 5, 6];
console.log(arrMax(arr));

// - створити функцію яка повертає найменьше число з масиву
let arMin =(arrMin) => {
    let min = arrMin[0]
    for (let i = 1; i < arrMin.length; i++) {
        if (arrMin[i]>min)
            min=arrMin[i]
    }

    return min
}
let arrMin = [12,14,15,6,7,1000]
console.log(arMin(arrMin))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumFunc = (sumArr) => {
    let result = 0;
    for (let i = 0; i < sumArr.length; i++) {
        result +=sumArr[i]  }
    return result
}
let sumArr = [ 32,45,76,11,14,7]
console.log(sumFunc(sumArr))

// - Дано натуральное число n. Выведите все числа от 1 до n.
const funcN = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
};

funcN(22);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let funcAB = (A, B) => {
if (A < B) {
    for (let i = A; i <= B; i++) {
        console.log(i);
    }
} else {
    for (let i = A; i >= B; i--) {
        console.log(i);
    }
}
};

funcAB(11, 15);
funcAB(15, 11);

//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
let foo = (arr, i) => {
    if (i >= 0 && i < arr.length - 1) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return arr;
};

console.log(foo([9, 8, 0, 4], 0));
console.log(foo([9, 8, 0, 4], 1));
console.log(foo([9, 8, 0, 4], 2));



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

const functZero = (arr) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count] = arr[i];
            count++;
        }
    }

    while (count < arr.length) {
        arr[count] = 0;
        count++;
    }

    return arr;
};
console.log(functZero([1, 0, 6, 0, 3]));
console.log(functZero([0, 1, 2, 3, 4]));
console.log(functZero([0, 0, 1, 0]));