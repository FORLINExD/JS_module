// 1 - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let h1Lorem = document.createElement('h1')
// h1Lorem.innerText = 'Lorem ipsum dolor sit amet.'
// h1Lorem.id = 'text'
// document.body.appendChild(h1Lorem);
//
// let text = document.getElementById('text');
// let button = document.getElementById('btn1');
//
// button.onclick = function (click) {
//     console.log('click')
//     text.style.display = 'none';
// }


// 2 - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let btn = document.getElementById('btn1');
//
// btn.onclick = function () {
//     btn.style.display = 'none';
// }


// 3 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let btn = document.getElementById('btn2');
// let ageInput = document.getElementById('age')
//
// btn.onclick = function () {
//     if (ageInput.value >= 18) {
//         alert(`Welcome! Your age is ${ageInput.value}`)
//     } else {
//         alert(`Access denied! Your age is ${ageInput.value}`)
//     }
// }


// 4 - Создайте меню, которое раскрывается/сворачивается при клике
//
// const ulMenu = document.getElementsByTagName('ul');
// const menuTitle = document.getElementById('menu__title');
// menuTitle.onclick = function () {
//     for (const argument of ulMenu) {
//         argument.classList.toggle('active');
//     }
// }


// 5 - Создать список комментариев, пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let comments = [
//     {title: 'User_1', text: 'lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
//     {title: 'User_2', text: 'Cum, laboriosam!'},
//     {title: 'User_3', text: 'esse fuga inventore ipsum laborum, nostrum nulla numquam odit'},
//     {title: 'User_4', text: 'reiciendis repellat sit sunt tempora veritatis voluptatem!'},
//     {title: 'User_5', text: 'maxime mollitia nostrum nulla optio quasi ratione repellat repudiandae sapiente sint tenetur, ut vitae!'}
// ]
//
// let mainContainer = document.createElement('div');
// mainContainer.classList.add('container');
//
// for (const comment of comments) {
//     const commDiv = document.createElement('div');
//     commDiv.classList.add('comment__block');
//
//     const h3Title = document.createElement('h3');
//     h3Title.classList.add('comments__title');
//     h3Title.innerText = comment.title;
//
//     const pText = document.createElement('p');
//     pText.classList.add('comments__text');
//     pText.innerText = comment.text;
//
//     const btn = document.createElement('button');
//     btn.id = 'btn1';
//     btn.innerHTML = 'Hide text';
//     btn.onclick = function () {
//         pText.classList.toggle('p__hidden');
//     }
//
//
//
//     mainContainer.appendChild(commDiv);
//     commDiv.append(h3Title, pText);
//     h3Title.appendChild(btn);
// }
//
// document.body.appendChild(mainContainer);