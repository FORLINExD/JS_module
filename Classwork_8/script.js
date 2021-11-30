// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)


// a) змінює ід main_header на назву групи в якій ви вчитесь (mon-year)
//
// let changeIdName = document.getElementById('main_header');
// changeIdName.id = 'sep2021';


// b) робить шириниу елементу ul 400px
//
// let ulWidth = document.getElementsByTagName('ul');
// for (const ulElement of ulWidth) {
//     ulElement.style.width = '400px';
// }


// c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// let linkListWidth = document.getElementsByClassName('linkList');
// for (const liElem of linkListWidth) {
//     liElem.style.width = '50%';
//     liElem.style.border = '1px solid green';
//     liElem.style.marginBottom = '5px';
// }


// d) отримує текст який зберігається в елементі з класом listElement2
//
// let listELem2Text = document.getElementsByClassName('listElement2');
// let list2Text = (text) => {
//     for (const element of listELem2Text) {
//         element.innerText = text;
//     }
// }
// list2Text('lorem ipsum dolor sit amet');


// e) отримує всі елементи li та змінює їм колір фону на сірий
//
// let liElementsBackground = document.getElementsByTagName('li');
// for (const element of liElementsBackground) {
//     element.style.backgroundColor = 'grey';
// }


// f) отримує всі елементи 'a' та додає їм клас anchor
//
// let addClassToA = document.getElementsByTagName('a');
// for (const element of addClassToA) {
//     element.classList.add('anchor');
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// let link3ChangeSize = document.getElementsByTagName('a');
//
// for (const element of link3ChangeSize) {
//     if (element.innerText === 'link3') {
//         element.style.fontSize = '40px';
//     }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// let addClassAndTextToA = document.getElementsByTagName('a');
// for (const aElement of addClassAndTextToA) {
//     aElement.classList.add('element_' + aElement.innerText);
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let changeBackgroundToSubHeader = document.getElementsByClassName('sub-header');
// for (const element of changeBackgroundToSubHeader) {
//     element.style.backgroundColor = prompt('Type name of background color below');    // Example: 1 - red, 2 - blue
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()
//
// let changeTextColorForSubHeader = document.getElementsByClassName('sub-header');
// for (const element of changeTextColorForSubHeader) {
//     if (element.innerText === 'content 2 segment') {
//         element.style.color = prompt('Type color of the text below');
//     }
// }


// k) отримує елемент з класом content_1 та заміняє в ньому текст на довільний. Текст отримати з prompt()
//
// let changeText = document.getElementsByClassName('content_1');
// for (const element of changeText) {
//     element.innerText = prompt();
// }


// l) отримати елементи p та змінити їм padding на 20px
//
// let changePaddingInP = document.getElementsByTagName('p');
// for (const pElement of changePaddingInP) {
//     pElement.style.padding = '20px';
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
// let changeText = document.getElementsByClassName('text2');
// for (const element of changeText) {
//     element.innerText = 'sep-2021';
// }