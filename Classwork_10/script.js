// 1 - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const f1 = document.forms.form1;
// const f2 = document.forms.form2;
//
// btn1.onclick = function () {
//     if (f1.first_name.value.length === 0 || f1.last_name.value.length === 0) {
//         alert('Заповніть всі поля');
//     } else {
//         console.log(`${f1.first_name.value}  ${f1.last_name.value}`);
//     }
// }
//
// btn2.onclick = function () {
//     if (f2.username.value.length === 0 || f2.email.value.length === 0) {
//         alert('Заповніть всі поля');
//     } else {
//         console.log(`${f2.username.value}  ${f2.email.value}`);
//     }
// }


// 2 - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//     (Додатковачастина для завдання)
//
// const btn = document.getElementById('btn3');
// const rows = document.getElementById('rows');
// const cells = document.getElementById('cells');
// const text = document.getElementById('text');
//
// btn.onclick = function () {
//     const tr = rows.value;
//     const td = cells.value;
//     const innerText = text.value;
//
//     function createTable(tr, td, innerText) {
//         const table = document.createElement('table')
//         table.style.border = '1px solid'
//         document.body.appendChild(table)
//         for (let i = 0; i < tr; i++) {
//             const tr = document.createElement('tr');
//             tr.style.border = '1px solid';
//
//             for (let j = 0; j < td; j++) {
//                 const td = document.createElement('td');
//                 td.style.border = '1px solid blue';
//                 td.innerText = `${innerText}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     createTable(tr, td, innerText)
// }


// 3 - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//  a) Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//  b) Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// let badWordsArr = ['fuck', 'shit', 'asshole', "motherfucker", 'bitch', 'bastard', 'cunt', 'cocksucker', 'nigga', 'slut', 'piece of shit', 'scumbag'];
//
// let mainDiv = document.createElement('div')
//
// let textInput = document.createElement('input');
// textInput.type = 'text';
// textInput.style.width = '500px';
// textInput.style.fontSize = '22px';
//
// let btn = document.createElement('button');
// btn.innerText = 'Check'
//
// document.body.appendChild(mainDiv);
// mainDiv.appendChild(textInput)
// mainDiv.appendChild(btn)
//
//
// a)
// btn.addEventListener('click', function () {
//     let inner = textInput.value;
//
//     for (const word of badWordsArr) {
//         if (word === inner) {
//             alert('Stop swearing!');
//             textInput.value = ''
//             return;
//         }
//     }
//     if (textInput) {
//         alert('No bad word detected, well done');
//         textInput = '';
//     }
// })
//
//
// b)
// btn.addEventListener('click', function () {
//     let inner = textInput.value;
//
//     for (const word of badWordsArr) {
//         if (inner.includes(word)) {
//             alert('Stop swearing!');
//             textInput.value = ''
//             return;
//         }
//     }
//     if (textInput) {
//         alert('No bad word detected, well done');
//         textInput = '';
//     }
// })

