// 1 - Знайти та вивести довижину наступних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
//
// let str1 = 'hello world', str2 = 'lorem ipsum', str3 = 'javascript is cool';
// console.log('First string length ' + str1.length, ' Second string length ' + str2.length, ' Third string length ' + str3.length);


// 2 - Перевести до великого регістру наступні стрінгові значення
//     'hello world', 'lorem ipsum', 'javascript is cool'
//
// let str1 = 'hello world', str2 = 'lorem ipsum', str3 = 'javascript is cool';
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());


// 3 - Перевести до нижнього регістру настипні стрінгові значення
//     'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let str1 = 'HELLO WORLD', str2 = 'LOREM IPSUM', str3 = 'JAVASCRIPT IS COOL';
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());


// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let dirtyString = ' dirty string   ';
// console.log(dirtyString.trim());


// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToArray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
// let str = 'Каждый охотник желает знать';
// let stringToArray = (str) => str.split(' ');
// document.writeln(stringToArray(str));
// console.log(stringToArray(str));


// 6 - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
//
// let str = 'Каждый охотник желает знать';
// let deleteCharacters = (str, length) => str.substring(length);
// console.log(deleteCharacters(str, 7));


// 7 - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let str = "HTML JavaScript PHP";
// let insertDash = (str) => str.toUpperCase().replaceAll(' ', '-');
// console.log(insertDash(str))


// 8 - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let firstCharToUpper = (str) => str[0].toUpperCase() + str.slice(1)
// console.log(firstCharToUpper('hello world'))


// 9 - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
// let capitalize = (str) => str.split(' ').map(item => item.charAt(0).toUpperCase()+item.slice(1)).join(' ');
// console.log(capitalize('hello world'))