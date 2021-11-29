// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//   -- отримує текст з параграфа з id "content"
//   -- отримує текст з блоку з id "rules"
//   -- замініть текст параграфа з id 'content' на будь-який інший
//   -- замініть текст параграфа з id 'rules' на будь-який інший
//   -- змініть кожному елементу колір фону на червоний
//   -- змініть кожному елементу колір тексту на синій
//   -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//   -- поміняти колір тексту у всіх елементів fc_rules на червоний


// 1 -- отримує текст з параграфа з id "content"
//
// let pContent = document.getElementById('content');
// console.log(pContent);


// 2 -- отримує текст з блоку з id "rules"
//
// let divRulesText = document.getElementById('rules');
// console.log(divRulesText.innerText);


// 3 -- замініть текст параграфа з id 'content' на будь-який інший
//
// let pContent = document.getElementById('content');
// pContent.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, impedit.';
// console.log(pContent.innerText);


// 4 -- замініть текст параграфа з id 'rules' на будь-який інший
//
// let divRulesText = document.getElementById('rules');
// divRulesText.innerText = 'Lorem ipsum dolor sit amet';
// console.log(divRulesText.innerText);


// 5 -- змініть кожному елементу колір фону на червоний
// 6 -- змініть кожному елементу колір тексту на синій

// let pBackgroundColor = document.getElementsByTagName('p');
// let divBackgroundColor = document.getElementsByTagName('div');
// let ulBackgroundColor = document.getElementsByTagName('ul');
//
// for (const pElement of pBackgroundColor) {
//     pElement.style.backgroundColor = 'red';
//     pElement.style.color = 'blue';
// }
// for (const divElement of divBackgroundColor) {
//     divElement.style.backgroundColor = 'red';
//     divElement.style.color = 'blue';
// }
// for (const ulElement of ulBackgroundColor) {
//     ulElement.style.backgroundColor = 'red';
//     ulElement.style.color = 'blue';
// }


// 7 -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// let rulesClassList = document.getElementById('rules');
// console.log(rulesClassList.classList);


// 8 -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
// let fcTextColor = document.getElementsByClassName('fc_rules');
// for (const element of fcTextColor) {
//     element.style.color = 'red';
// }