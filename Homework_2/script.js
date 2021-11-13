// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = Math.floor(Math.random()*59);
// if (time <= 59 && time >= 46) {
//     document.write(time + '<h2>4th part</h2>');
//
// } else if(time <= 45 && time >= 31) {
//     document.write(time + '<h2>3rd part</h2>')
//
// } else if(time <= 30 && time >= 16) {
//     document.write(time + '<h2>2nd part</h2>')
//
// } else {
//     document.write(time + '<h2>1st part</h2>')
// }




// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = Math.floor(Math.random() * 31) + 1;
// if (day >= 1 && day <= 10) {
//     document.write(day + '<h2>1st decade</h2>')
// } else if (day >= 11 && day <= 20) {
//     document.write(day + '<h2>2nd decade</h2>')
// } else {
//     document.write(day + '<h2>3rd decade</h2>')
// }





// - У нас є змінна test, якщо вона дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let testA = !!Math.floor(Math.random()*2);
// if (testA === true) {
//     console.log(testA + ' Вірно')
// } else {
//     console.log(testA + ' Невірно')
// }

// let testB = !!Math.floor(Math.random()*2);
// let test = testB === true ? ' Вірно' : ' Невірно'
// console.log(testB + test);





// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = 1;
// if (a !== 0) {
//     console.log("Вірно")
// } else {
//     console.log("Невірно")
// }





// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
// let schedule = +prompt("Enter the number of a day in a week from 1 to 7");
// switch (schedule) {
//     case 1:
//         document.write('<h2>Monday</h2><ul><li>10 push ups</li><li>20 squats</li><li>1 minute glute bridge</li><li>repeat 2-5 times</li></ul>')
//         break;
//     case 2:
//         document.write('<h2>Tuesday</h2><ul><li>10 weighted dumbbell burpees</li><li>10 weighted squats</li><li>10 lunges with overhead press (each side)</li><li>Repeat 2-5 times</li></ul>')
//         break;
//     case 3:
//         document.write('<h2>Wednesday</h2><ul><li>1 minute weighted glute bridge</li><li>1 minute side bridge (both sides)</li><li>1 minute supermans</li><li>1 minute plank</li><li>1 minute squat</li><li>Repeat 2-5 times</li></ul>')
//         break;
//     case 4:
//         document.write('<h2>Thursday</h2><ul><li>15 push ups</li><li>30 squats</li><li>2 minute glute bridge</li><li>repeat 2-3 times</li></ul>')
//         break;
//     case 5:
//         document.write('<h2>Friday</h2><ul><li>15 weighted dumbbell burpees</li><li>15 weighted squats</li><li>15 lunges with overhead press (each side)</li><li>Repeat 2-4 times</li></ul>')
//         break;
//     case 6:
//         document.write('<h2>Saturday</h2><ul><li>2 minute weighted glute bridge</li><li>1.5 minute side bridge (both sides)</li><li>1.5 minute supermans</li><li>1.5 minute plank</li><li>2 minute squat</li><li>Repeat 2-3 times</li></ul>')
//         break;
//     case 7:
//         document.write('<h2>Sunday</h2><ul><li>Rest & Stretch</li></ul>')
//         break;
//
//     default:
//         document.write('<h1>We only have 7 days in a week</h1>')
// }





// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = prompt("Введіть рік");
// let leapYear = year % 4 === 0 ? " Високосний рік" : " Не високосний рік"
// alert(year + leapYear)
//





// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let question = prompt("Яка «офіційна» назва JavaScript?")
// if (question === "ECMAScript") {
//     alert("Правильно!")
// } else {
//     alert("Не знаєте? ECMAScript!")
// }