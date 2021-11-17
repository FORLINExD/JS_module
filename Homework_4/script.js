// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function areaOfRectangle(height, width) {
//     return (height * width)
// }
//
// console.log(areaOfRectangle(16, 9))
// document.write('Площа прямокутника ' + areaOfRectangle(16, 9))


// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function areaOfCircle(R) {
//     return Math.PI * Math.pow(R, 2)
// }
//
// console.log('Площа круга ' + areaOfCircle(8))


// 3 - створити функцію яка обчислює та повертає площу циліндра висотою h, та радіутом r
//
// function areaOfCylinder(r, h) {
//     return 2 * Math.PI * r * (r + h)
// }
//
// console.log("Площа повноЇ поверхні циліндра " + areaOfCylinder(5, 10))


// 4 - створити функцію яка приймає масив та виводить кожен його елемент
//
// let array = [1253, 'freedom', 21, 'random', 321.12, 'word', true]
// function arrayFunc(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// arrayFunc(array)


// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function pText (p) {
//     document.write(`<p> ${p} </p>`)
// }
//
// pText('Hello world!')


// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function ulList(text) {
//     document.write(`<ul>`)
//     document.write(`<li> ${text} </li>`)
//     document.write(`<li> ${text} </li>`)
//     document.write(`<li> ${text} </li>`)
//     document.write(`</ul>`)
// }
//
// ulList('qwerty')


// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function ulList2(text2, quantity) {
//     document.write(`<ul>`)
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li> ${text2} </li>`)
//     }
//     document.write(`</ul>`)
// }
//
// ulList2('Hello everybody', 10)


// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let simpleArr = ['hello', 4121, false, 'map', 651.33, true]
// function arrayListBuilder(arr) {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li> ${arr[i]} </li>`)
//     }
//     document.write(`</ul>`)
// }
// arrayListBuilder(simpleArr)


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
// function userAbout(arr) {
//     document.write(`<div>`)
//     for (const arrElement of arr) {
//         document.write(`<div> <h2> Id: ${arrElement.id} </br> Name: ${arrElement.name} </br> Age: ${arrElement.age} </h2> </div>`)
//     }
//     document.write(`</div>`)
// }
//
// userAbout(array)