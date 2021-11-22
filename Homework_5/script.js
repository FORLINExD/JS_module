// Всі функції повинні бути описані стрілочним типом!!!!


// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let areaOfRectangle = (a, b) => a * b;
// console.log(areaOfRectangle(10, 5));


// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// let areaOfCircle = (r) => Math.PI * Math.pow(r,2);
// console.log(areaOfCircle(8));


// 3 - створити функцію яка обчислює та повертає площу циліндра висотою h, та радіутом r
//
// let areaOfCylinder = (r, h) => 2 * Math.PI * r * (r + h);
// console.log(areaOfCylinder(5,10));


// 4 - створити функцію яка приймає масив та виводить кожен його елемент
//
// let arrayFunc = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
//     return arr;
// }
// arrayFunc([5,152,53,84,'wasd','hello']);


// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let pText = (p) => document.write(`<p>${p}</p>`);
// pText('qwerty');


// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let ulList = (liText) => document.write(`<ul> <li>${liText}</li> <li>${liText}</li> <li>${liText}</li> </ul>`);
// ulList('I like it');


// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let ulList = (liText, liQuantity) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < liQuantity; i++) {
//         document.write(`<li> ${liText} </li>`);
//     }
//     document.write(`</ul>`);
// }
// ulList('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 20);


// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let primitiveArray = (arr) => {
//     document.write(`<ol>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li> ${arr[i]} </li>`);
//     }
//     document.write(`</ol>`);
// }
// primitiveArray([21, 643, 12.213, true, false, 'abra', 'qwerty']);


// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let array = [
//     {
//         id: 1,
//         name: 'John',
//         age: 34
//     },
//     {
//         id: 2,
//         name: 'Max',
//         age: 20
//     },
//     {
//         id: 3,
//         name: 'Jeff',
//         age: 29
//     },
//     {
//         id: 4,
//         name: 'Dan',
//         age: 27
//     },
//     {
//         id: 5,
//         name: 'Julia',
//         age: 25
//     },
//     {
//         id: 6,
//         name: 'Kate',
//         age: 32
//     },
//     ]
//
// let users = (usersArr) => {
//     for (const usersArrElement of usersArr) {
//         document.write(`<div>`);
//         document.write(`<h2> Id: ${usersArrElement.id} Name: ${usersArrElement.name} Age: ${usersArrElement.age} </h2>`);
//         document.write(`</div>`);
//     }
// }
// users(array);

