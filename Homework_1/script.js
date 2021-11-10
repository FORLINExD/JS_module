// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

let a1 = 'hello ';
let b1 = 'owu ';
let c1 = 'com ';
let d = 'ua ';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;

console.log(a1, b1, c1, d, e, f, g, h, i, j, k, l, m);
// alert(a);
document.write(a1);





// - Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

a1 = 'qwerty ';
b1 = 'random ';
c1 = 'word ';
d = 'gg ';
e = 62;
f = 5439;
g = -2135213;
h = 'hi ';
i = 21.323;
j = 5.2;
k = 'wp ';
l = false;
m = true;

console.log(a1, b1, c1, d, e, f, g, h, i, j, k, l, m);
// alert(h);
document.write(a1);





// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = "Vladyslav";
let middleName = "Volodymyrovych";
let lastName = "Melnyk";
console.log(firstName, middleName, lastName)

let person = {
    firstName: 'Vladyslav',
    middleName: 'Volodymyrovych',
    lastName: 'Melnyk',
}
console.log(person["firstName"])





// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let firstName = prompt('Enter your first name');
// let middleName = prompt('enter your middle name');
// let age = prompt('enter your age');

// console.log('Вітаю ' + firstName, middleName + '. Тобі ' + age + ' роки.')





// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)





// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразах не використовувати однакові оператори!!!
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true

console.log(5 < 6)
console.log(5 > 6)
console.log(5 === 6)
console.log(5 >= 6)
console.log(10 === 10)
console.log(10 <= 10)
console.log(10 !== 10)
console.log(10 > 10)
console.log(10 < 10)
console.log(123 !== 123)
console.log(123 === 123)

