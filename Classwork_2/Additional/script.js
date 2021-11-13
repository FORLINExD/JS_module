// 1 - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//     кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3) {
//     console.log("This is a large array, there are 3 or more elements inside")
// } else {
//     console.log("This is a small array, there are less than 3 elements inside")
// }





// 2 - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

// let a = +prompt("Enter first number");
// let b = +prompt("Enter second number");
// let c = +prompt("Enter third number");
//
// if (a > b && a < c || a < b && a > c) {
//     console.log('Middle number is ' + a)
// } else if (b > a && b < c || b < a && b > c) {
//     console.log('Middle number is ' + b)
// } else if (c > a && c < b || c < a && c > b) {
//     console.log('Middle number is ' + c)
// } else {
//     console.log("Error, numbers expected")
// }





// 3 - Перепишіть конструкцію if з використанням умовного оператора '?':
//     let result;
//     if (a + b < 4) {
//     result = 'Мало';
//     } else {
//     result = 'Багато';
//     }

// let a = 1;
// let b = 2;
// let result = (a + b < 4) ? 'Меньше' : 'Більше';
// console.log(result)





// 4 - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
//     напишіть це тернарним оператором

// let number = 23;
// let numTest = number <= 100 && number >= 1 ? "Позитивне" : number === 0 ? "Нуль" : number <= -1 && number >= -100 ? "Негативне" : "Інше"
// console.log(numTest)