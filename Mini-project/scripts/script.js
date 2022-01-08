
let mainContainer = document.createElement('div')
mainContainer.classList.add('main__container')
document.body.appendChild(mainContainer);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let userBlock = document.createElement('div');
            userBlock.classList.add('user__block');

            let userContent = document.createElement('div');
            userContent.classList.add('user__content');

            let userId = document.createElement('h3');
            userId.id = 'user__id';
            userId.innerHTML = `ID-${user.id}`;

            let userName = document.createElement('h2');
            userName.classList.add('user__name');
            userName.innerText = user.name;

            let button = document.createElement('button');
            button.id = 'details__btn';
            button.innerHTML = 'Details';

            button.onclick = () =>  {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
                    .then(response => response.json())
                    .then(user => {
                        localStorage.setItem('userData', JSON.stringify(user))
                        document.location = 'user-details.html'
                    })
            }


            mainContainer.appendChild(userBlock);
            userBlock.append(userContent, button);
            userContent.append(userId, userName)
        }
    })