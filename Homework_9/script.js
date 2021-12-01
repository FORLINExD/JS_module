// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// // 1 - створити блок,
// let div = document.createElement('div');
// div.innerText = 'Lorem ipsum dolor sit amet';
// div.style.height = '300px';
// div.style.marginBottom = '10px';
//
// // 2 - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
//
// // 3 - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.backgroundColor = '#8065AF';
// div.style.color = '#fbd75b';
// div.style.fontSize = '40px';
//
// // 4 - додати цей блок в body.
// document.body.appendChild(div);
//
// // 5 - клонувати його повністю, та додати клон в body.
// let cloneDiv = div.cloneNode(true);
// document.body.appendChild(cloneDiv);



// // 6 - Є масив:
// //   ['Main','Products','About us','Contacts']
// //   Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// //   Завдання робити через цикли.
//
// let array = ['Main', 'Products', 'About us', 'Contacts'];
// let classMenu = document.getElementsByClassName('menu')[0];
//
// for (const string of array) {
//     let li = document.createElement('li');
//     li.innerText = string;
//
//
//     classMenu.append(li);
// }



// // 7 - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const element of coursesAndDurationArray) {
//     let block = document.createElement('div');
//     block.innerText = `${element.title} ${element.monthDuration}`;
//     block.style.marginBottom = '5px';
//     block.style.padding = '0 5px 0';
//     block.style.maxWidth = '200px';
//     block.style.height = '50px';
//     block.style.border = '1px solid black';
//
//     document.body.appendChild(block);
// }



// // 8 - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
//
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const element of coursesAndDurationArray) {
//     let divTag = document.createElement('div');
//     divTag.classList.add('item');
//     divTag.style.display = 'flex'
//     divTag.style.alignItems = 'center'
//     divTag.style.columnGap = '20px'
//     divTag.style.border = '1px solid black'
//     divTag.style.margin = '5px'
//
//     let h1Tag = document.createElement('h1');
//     h1Tag.classList.add('heading');
//     h1Tag.innerText = element.title;
//
//     let pTag = document.createElement('p');
//     pTag.classList.add('description');
//     pTag.innerText = element.monthDuration;
//     pTag.style.fontSize = '25px'
//
//
//
//     document.body.appendChild(divTag);
//     divTag.appendChild(h1Tag);
//     divTag.appendChild(pTag);
// }
