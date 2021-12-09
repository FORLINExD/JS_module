//  є масив -
//  створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
//  Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let container = document.body.appendChild(document.createElement('div'));
container.classList.add('container');
container.style.backgroundColor = '#c4c4c4';
container.style.padding = '5px';
container.style.display = 'flex';


for (const user of users) {
    let userBlock = document.createElement('div');
    userBlock.innerHTML = `<h3>Name: ${user.name}</h3> <h3>Age: ${user.age}</h3> <h4>Status: ${user.status}</h4>`;
    userBlock.style.border = '1px solid #333';
    userBlock.style.flexGrow = '1';

    let btn = document.createElement('button');
    btn.innerHTML = 'Add to Fav';
    btn.type = 'submit';

    let fav = 'favorites';
    localStorage.setItem(fav, JSON.stringify([]));
    btn.onclick = function () {
        let favorites = JSON.parse(localStorage.getItem(fav));
        favorites.push(user);
        localStorage.setItem(fav, JSON.stringify(favorites));


    }
    container.appendChild(userBlock);
    userBlock.appendChild(btn);
}

