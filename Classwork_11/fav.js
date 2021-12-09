console.log(JSON.parse(localStorage.getItem('favorites')));

const fav = 'favorites';
const container = document.body.appendChild(document.createElement('div'));
const users = JSON.parse(localStorage.getItem(fav));

for (const user of users) {
    let userBlock = document.createElement('div');
    userBlock.innerHTML = `<h3>Name: ${user.name}</h3> <h3>Age: ${user.age}</h3> <h4>Status: ${user.status}</h4>`;

    container.appendChild(userBlock)
}
