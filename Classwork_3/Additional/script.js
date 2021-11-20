// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// a. заповнити його 50 парними числами за допомоги циклу.
//
// let arr = [];
// let num = 0;
// for (let i = 0; i <= 100; i++) {
//     if (num % 2 === 0 && num !== 0) {
//         arr.push(num)
//     }
//     num++
// }
// console.log(arr)


// b. заповнити його 50 непарними числами за допомоги циклу.
//
// let arr = [];
// let num = 0;
// for (let i = 0; i <= 100; i++) {
//     if (num % 2 !== 0 && num !== 0) {
//         arr.push(num)
//     }
//     num++
// }
// console.log(arr)


// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.round(Math.random()*200))
// }
// console.log(arr)


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.round(Math.random() * 732 + 8))
// }
// console.log(arr)


// 2. Вивести за допомогою console.log кожен третій елемен
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// for (let i = 2; i < arr.length; i+=3) {
//     console.log(arr[i])
// }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//
// let arr = [52, 65, 328, 4381, 431, 862, 22, 56, 387, 218]
// for (let i = 2; i < arr.length; i+=3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
// }


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//
// let arr = [52, 65, 328, 4381, 431, 862, 22, 56, 387, 218];
// let newArr = [];
// for (let i = 2; i < arr.length; i+=3) {
//     if (arr[i] % 2 === 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr)


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//    EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let arr = [100,250,50,168,120,345,188];
// let res = 0;
// for (let i = 0; i < arr.length; i++) {
//     res = res + arr[i];
// }
// console.log(res / arr.length)


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// let arr = [13, 173, 197, 81, 45, 174, 4, 38, 156, 113];
// let arr2 = [];
//
// for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i] * 5);
//     console.log(arr[i] + ' multiplied by 5 = ' + arr2[i]);
// }


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arr = [32, 'saddas', true, false, 221, 'yellow', 'count', 125]
// let arr2 = []
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'number') {
//         arr2.push(arr[i])
//     }
// }
// console.log(arr2)


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     let user = usersWithId[i];
//     for (const citiesElement of citiesWithId) {
//         if (citiesElement.user_id === user.id) {
//             user.address = citiesElement;
//         }
//     }
// }
//
// console.log(usersWithId)


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] !== 0) {
//         console.log(arr[i]);
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [];
//
// for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i]);
//     console.log(arr2[i])
// }


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// let arr = [ 'a', 'b', 'c'];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2 = arr2 + arr[i]
// }
// console.log(arr2)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c'];
// let arr2 = [];
// let i = 0;
// while (i < arr.length) {
//     arr2 = arr2 + arr[i]
//     i++
// }
// console.log(arr2)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c'];
// let arr2 = [];
//
// for (const element of arr) {
//     arr2 = arr2 + element;
// }
// console.log(arr2)