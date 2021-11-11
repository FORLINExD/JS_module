// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let arr = [53, -21, 46, 32.3, 123, 65, 86, 3.14, 57, -8];
let result = (arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]+arr[9])
console.log(result)





// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

// let bookFirst = {
//     name: "Harry Potter and the Philosopher's Stone",
//     pages: 352,
//     genre: "Adventure, Fantasy",
//     author: "J. K. Rowling"
// }
//
// console.log(bookFirst["name"])
//
// let bookSecond = {
//     name: "The Art of War",
//     pages: 152,
//     genre: "Military art",
//     author: "Sun Tzu"
// }
//
// console.log(bookSecond["name"])





// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let book = [
    {
    name: "Harry Potter and the Philosopher's Stone",
    pages: 352,
    genre: "Adventure, Fantasy",
    author: "J. K. Rowling"
    },
    {
    name: "The Art of War",
    pages: 152,
    genre: "Military art, History",
    author: "Sun Tzu"
}
]

console.log(book[0], book[1]);






// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height*width;
console.log(s)





// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//    результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let pi = 3.14;
let v = pi*(dC/2)**2*heightC;
console.log(v)





// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//    Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = n**2+m**2;
console.log(Math.sqrt(k))