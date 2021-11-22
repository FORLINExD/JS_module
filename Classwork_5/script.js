// Всі функції повинні бути описані стрілочним типом!!!!

// 1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// let minNum = (a, b, c) => a < b && a < c ? document.write(a) : b < a && b < c ? document.write(b) : c < a && c < b ? document.write(c) : document.write('Try again');
// minNum(19, 5, 10);


// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// let maxNum = (a, b, c) => a > b && a > c ? document.write(a) : b > a && b > c ? document.write(b) : c > a && c > b ? document.write(c) : document.write('Try again');
// maxNum(129, 88, 165);


// 3 - створити функцію яка повертає найбільше число з масиву
//
// let maxNumArr = (arr) => {
//     let num = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             num = arr[i];
//         }
//     }
//     return num;
// }
// console.log(maxNumArr([5321, 61, 234, 8761, 1421, 563]));


// 4 - створити функцію яка повертає найменьше число з масиву
// let minNumArr = (arr) => {
//     let num = arr[0];
//     for (const element of arr) {
//         if (element < num) {
//             num = element;
//         }
//     }
//     return num;
// }
// console.log(minNumArr([5321, 361, 234, 8761, 1421, 563]));


// 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let sumArr = (arr) => {
//     let res = 0;
//     for (const arrElement of arr) {
//         res = res + arrElement;
//     }
//     return res;
// }
// console.log(sumArr([321, 361, 234, 761, 421, 563]));


// 6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let sumArr = (arr) => {
//     let res = 0;
//     for (const arrElement of arr) {
//         res = res + arrElement;
//     }
//     return res / arr.length;
// }
// console.log(sumArr([321, 361, 234, 761, 421, 563]));


// 7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let minMaxArray = (num) => {
//     let maxNum = num[0];
//     let minNum = num[0];
//     for (const numEl of num) {
//         if (numEl > maxNum) {
//             maxNum = numEl;
//         }
//         if (numEl < minNum) {
//             minNum = numEl;
//         }
//     }
//     console.log(maxNum);
//     return minNum;
// }
// minMaxArray([321, 361, 234, 761, 421, 563]);


// 8 - створити функцію яка заповнює масив рандомними числами
//
// let randomArr = (numArr, length) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * 1000))
//     }
//     return array;
// }
// console.log(randomArr([], 10));


// 9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let randomArr = (numArr, length, limit) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * limit))
//     }
//     return array;
// }
// console.log(randomArr([], 10, 200));


// 10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let reverseArr = (arr) => {
//     let array = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         array.push(arr[i]);
//     }
//     return array;
// }
// console.log(reverseArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))