// - створити функцію, яка якщо приймає один аргумент, просто виводить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// function foo(a, b) {
//     if (arguments[0] && arguments[1]) {
//         console.log(arguments[0] + arguments[1])
//     } else {
//         console.log(arguments[0])
//     }
// }
// foo(412, 523)


// - створити функцію  яка приймає два масиви та складає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//      [1,2,3,4]
//      [2,3,4,5]
//   результат
//      [3,5,7,9]
//
// let array1 = [1, 2, 3, 4];
// let array2 = [2, 3, 4, 5];
// function foo(arr1, arr2) {
//     let res = [];
//     for (let i = 0, j = 0; i < arr1.length; i++, j++) {
//         res.push(arr1[i] + arr2[j]);
//     }
//     return res
// }
// console.log(foo(array1, array2))


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function keyBack(arr) {
//     let res = [];
//     for (const arrElement of arr) {
//         for (const arrKey in arrElement) {
//             res.push(arrKey);
//         }
//     }
//     return res
// }
// console.log(keyBack(array))


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function keyBack(arr) {
//     let res = [];
//     for (const arrElement of arr) {
//         for (const arrKey in arrElement) {
//             res.push(arrElement[arrKey]);
//         }
//     }
//     return res
// }
// console.log(keyBack(array))