// 1 - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let numA = +prompt("Enter first number")
// let numB = +prompt("Enter second number")
// if (numA > numB) {
//     console.log(numA)
// } else if (numB > numA) {
//     console.log(numB)
// } else {
//     console.log("Numbers are equal")
// }





// 2 - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
//     Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let apNum = +prompt("Enter apartment number")
// if (apNum >= 1 && apNum <= 20) {
//     document.write('<h2>Your apartment is located in the first entrance</h2>')
// } else if (apNum >= 21 && apNum <= 48) {
//     document.write('<h2>Your apartment is located in the second entrance</h2>')
// } else if (apNum >= 49 && apNum <= 90) {
//     document.write('<h2>Your apartment is located in the third entrance</h2>')
// } else {
//     document.write('<h2>There is no apartment with this number, please try again</h2>')
// }
//





// 3 - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('Enter the number')
// let b = number === 10 ? 'Вірно' : 'Невірно'
// console.log(b)





// 4 - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
//     якщо в змінну записали щось інше, спрацьовує else

// let x = {dsada: "qwerty"};
// if (typeof x === 'number') {
//     console.log(1)
// } else if (typeof x === 'string') {
//     console.log(2)
// } else if (typeof x === 'boolean') {
//     console.log(3)
// } else if (typeof x === 'object' || typeof x === 'array') { // як визначити чи це масив?
//     console.log(4)
// } else {
//     console.log("What is that?")
// }





// 5 - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temperature = Math.floor(Math.random()*23);
// let goodTemp = temperature >=10 && temperature <=22 ? " We are going to study at the office" : " Stay home and study online"
// document.write(`<h1>${temperature}<sup>°C</sup>${goodTemp}</h1>`)





// 6 - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let quiz = +prompt("Введіть число від 1 до 5")
// switch (quiz) {
//     case (1):
//         document.write('<h2>Ви виграли 5000 гривень!🙂</h2>')
//         break;
//     case (2):
//         document.write('<h2>Ви виграли Планшет!😃</h2>')
//         break;
//     case (3):
//         document.write('<h2>Ви виграли Телефон!😄</h2>')
//         break;
//     case (4):
//         document.write('<h2>Ви виграли Мотоцикл!🤩</h2>')
//         break;
//     case (5):
//         document.write('<h2>Ви виграли Автомобіль!🥳</h2>')
//         break;
//     default:
//         document.write('<h2>На жаль ви нічого не виграли 🙁️</h2>')
// }