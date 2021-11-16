// 1  --створити масив з:
//    - з 5 числових значень
//    - з 5 стічкових значень
//    - з 5 значень стрічкового, числового та булевого типу
//    - та вивести його в консоль
//
// let numArr = [13, 57, 2841, 564, 428]
// let strArr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let mixArr = ['sport', 'resource', 65424, 12 > 8, 643 < 321]
// console.log(numArr, strArr, mixArr)





// 2   -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let arr = [];
// arr[0] = 'Random words';
// arr[1] = 643543;
// arr[2] = true;
// console.log(arr)





// 3   - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// document.write('<div>')
// for (let i = 0; i < 10; i++) {
//     document.write('<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>')
// }
// document.write('</div>')
//
//
//     - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// document.write('<div>')
// for (let i = 0; i < 10; i++) {
//     document.write('<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>' + `${i}`)
// }
// document.write('</div>')
//
//
//     - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0;
// while (i <= 20) {
//     document.write('<h1>Lorem ipsum dolor sit amet.</h1>')
//
//     i++;
// }
//
//
//     - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0;
// while (i <= 20) {
//     document.write('<h1>Lorem ipsum dolor sit amet.</h1>' + i)
//
//     i++;
// }





// 4   - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let numArr = [98, 480, 819, 72, 467, 2, 85, 106, 26, 524];
// for (let i = 0; i < numArr.length; i++) {
//     console.log(numArr[i])
// }
//
//
//     - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let strArr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Mollitia', 'quasi'];
// for (let i = 0; i < strArr.length; i++) {
//     console.log(strArr[i])
// }
//
//
//     - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let mixArr = ['ground', 'cars', 3245, false, 'omegalul', 'pog', 45.543, 643 >= 321, 'pepega', 1337];
// for (let i = 0; i < mixArr.length; i++) {
//     console.log(mixArr[i])
// }
//
//
//     - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// let mixArr = ['ground', 7 < 15, 3245, false, 'omegalul', 'pog', 45.543, 643 >= 321, 'pepega', 1337];
// for (let i = 0; i < mixArr.length; i++) {
//     if (typeof mixArr[i] === "boolean") {
//         console.log(mixArr[i])
//     }
// }
//
//
//     - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// let mixArr = ['ground', 7 < 15, 3245, false, 'omegalul', 'pog', 45.543, 643 >= 321, 'pepega', 1337];
// for (let i = 0; i < mixArr.length; i++) {
//     if (typeof mixArr[i] === "number") {
//         console.log(mixArr[i])
//     }
// }
//
//     - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let mixArr = ['ground', 7 < 15, 3245, false, 'omegalul', 'pog', 45.543, 643 >= 321, 'pepega', 1337];
// for (let i = 0; i < mixArr.length; i++) {
//     if (typeof mixArr[i] === "string") {
//         console.log(mixArr[i])
//     }
// }





// 5   - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let arr = [];
// arr[0] = 3.14;
// arr[1] = 123456;
// arr[2] = true;
// arr[3] = 'lorem'
// arr[4] = 512.321;
// arr[5] = false;
// arr[6] = 'batchest'
// arr[7] = 'zulul'
// arr[8] = 32 > 18;
// arr[9] = 42.321
// arr[10] = 'hello'
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
//
//
//     - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     document.write(`${i} </br>`)
// }
//
//
//     - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(`${i} </br>`)
// }
//
//
//     - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i += 2) {
//     console.log(i)
//     document.write(`${i} </br>`)
// }
//
//
//     - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0){
//         console.log(i)
//         document.write(`${i} </br>`)
//     }
// }
//
//
//     - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0){
//         console.log(i)
//         document.write(`${i} </br>`)
//     }
// }