// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// let container = document.body.appendChild(document.createElement('div'));
// container.classList.add('container');
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         for (const post of posts) {
//             let divPost = document.createElement('div');
//             divPost.classList.add('div__post');
//
//             let userId = document.createElement('h3');
//             userId.classList.add('user__id');
//             userId.innerHTML = `ID: ${post.id}`;
//
//             let userTitle = document.createElement('h2');
//             userTitle.classList.add('user__title');
//             userTitle.innerHTML = `Title: ${post.title}`;
//
//             let userBody = document.createElement('p');
//             userBody.classList.add('user__body');
//             userBody.innerHTML = `${post.body}`;
//
//             container.appendChild(divPost);
//             divPost.append(userId, userTitle, userBody);
//         }
//     })


// 2.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//
// let main = document.body.appendChild(document.createElement('div'));
// main.classList.add('main');
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(comments => {
//         for (const comment of comments) {
//             let divComment = document.createElement('div');
//             divComment.classList.add('div__comment');
//
//             let idNameBlock = document.createElement('div')
//             idNameBlock.classList.add('id__name_div');
//
//             let commentId = document.createElement('h4');
//             commentId.classList.add('comment__id');
//             commentId.innerHTML = `${comment.id}`;
//
//             let commentName = document.createElement('h3');
//             commentName.classList.add('comment__name');
//             commentName.innerHTML = `${comment.name}`;
//
//             let commentEmail = document.createElement('h5');
//             commentEmail.classList.add('comment__email');
//             commentEmail.innerHTML = `${comment.email}`;
//
//             let commentBody = document.createElement('p');
//             commentBody.classList.add('comment__body');
//             commentBody.innerHTML = `${comment.body}`;
//
//
//             main.appendChild(divComment);
//             divComment.append(idNameBlock, commentEmail, commentBody);
//             idNameBlock.append(commentId, commentName);
//         }
//     })