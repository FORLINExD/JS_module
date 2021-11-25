// 1 - Дано список імен.
//     let n1 = 'Harry..Potter'
//     let n2 = 'Ron---Whisley'
//     let n3 = 'Hermione__Granger'
//     Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//     let n1 = 'Harry Potter'
//     let n2 = 'Ron Whisley'
//     let n3 = 'Hermione Granger'
//
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Weasley'
// let n3 = 'Hermione__Granger'
//
// let normalizeText = (str) => {
//     return str
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ')
// }
// console.log(normalizeText(n1));

// let name = (string, symbol) => {
//     let newArr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
// name(n3, '_');

// 2 - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// let randomNumArray = (length, limit) => {
//     let res = [];
//     for (let i = 0; i < length; i++) {
//         res.push(Math.round(Math.random()*limit))
//     }
//     return res
// }
// console.log(randomNumArray(20, 100));


// 3 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
// let randomNumArray = (length, limit) => {
//     let res = [];
//     for (let i = 0; i < length; i++) {
//         res.push(Math.round(Math.random() * limit));
//     }
//     res.sort((num1, num2) => {
//         return num1 - num2;
//     });
//     return res;
// }
// console.log(randomNumArray(20, 100));


// 4 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//
// let randomNumArray = (length, limit) => {
//     let res = [];
//     for (let i = 0; i < length; i++) {
//         res.push(Math.round(Math.random() * limit))
//     }
//     return res.filter(value => {
//         return value % 2 === 0;
//     })
// }
// console.log(randomNumArray(20, 100));


// 5 - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let randomNumArray = (length, limit) => {
//     let res = [];
//     for (let i = 0; i < length; i++) {
//         res.push(Math.round(Math.random() * limit))
//     }
//     return res.map(value => {
//         return value + '';
//     });
// }
// console.log(randomNumArray(20, 100));


// 6 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11, 23, 3, 4, 163, 32, 54, 16, 92];
// let sortNums = (arr, direction) => {
//     arr.sort((a, b) => {
//         if (direction === 'ascending') {
//             return a - b;
//         } else if (direction === 'descending') {
//             return  b - a;
//         } else {
//             return false;
//         }
//     })
//     return arr;
// }
// console.log(sortNums(nums, 'ascending'));


// 7 - є масив
//     let coursesAndDurationArray = [
//         {title: 'JavaScript Complex', monthDuration: 5},
//         {title: 'Java Complex', monthDuration: 6},
//         {title: 'Python Complex', monthDuration: 6},
//         {title: 'QA Complex', monthDuration: 4},
//         {title: 'FullStack', monthDuration: 7},
//         {title: 'Frontend', monthDuration: 4}
//     ];
//     a) -- відсортувати його за спаданням за monthDuration
//     b) -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// a) -- відсортувати його за спаданням за monthDuration
// let arrSort = (arr) => {
//     return arr.sort((a, b) => {
//       return b.monthDuration - a.monthDuration;
//     })
// }
// console.log(arrSort(coursesAndDurationArray));

// b) -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let arrFilter = (arr) => arr.filter(element => element.monthDuration > 5);
// console.log(arrFilter(coursesAndDurationArray));


// 8 - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//     document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// let wordToCut = 'наслаждение';
// let cutString = (str, n) => {
//     let arrCuts = [];
//     while (str.length) {
//         arrCuts.push(str.substring(0, 3));
//         str = str.slice(n);
//     }
//     return arrCuts;
// }
// console.log(cutString(wordToCut, 3));
// document.write(`${cutString(wordToCut, 3)}`);
