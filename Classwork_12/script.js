//  1.
//  Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
//  https://jsonplaceholder.typicode.com/posts
//  зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let container = document.body.appendChild(document.createElement('div'));
container.classList.add('container');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let divPost = document.createElement('div');
            divPost.classList.add('div__post');

            let idBtnDiv = document.createElement('div');
            idBtnDiv.classList.add('id__btn__block')

            let userId = document.createElement('h3');
            userId.classList.add('user__id');
            userId.innerHTML = `ID: ${post.id}`;

            let btn = document.createElement('button');
            btn.innerHTML = 'Click'
            btn.id = 'btn'

            let userTitle = document.createElement('h2');
            userTitle.classList.add('user__title');
            userTitle.innerHTML = `Title: ${post.title}`;

            let userBody = document.createElement('p');
            userBody.classList.add('user__body');
            userBody.innerHTML = `${post.body}`;

            btn.addEventListener('click', function () {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let divComment = document.createElement('div');
                                divComment.classList.add('div__comment_hidden');

                                let idNameBlock = document.createElement('div')
                                idNameBlock.classList.add('id__name_div');

                                let commentId = document.createElement('h4');
                                commentId.classList.add('comment__id');
                                commentId.innerHTML = `${comment.id}`;

                                let commentName = document.createElement('h3');
                                commentName.classList.add('comment__name');
                                commentName.innerHTML = `${comment.name}`;

                                let commentEmail = document.createElement('h5');
                                commentEmail.classList.add('comment__email');
                                commentEmail.innerHTML = `${comment.email}`;

                                let commentBody = document.createElement('p');
                                commentBody.classList.add('comment__body');
                                commentBody.innerHTML = `${comment.body}`;


                                divPost.appendChild(divComment);
                                divComment.append(idNameBlock, commentEmail, commentBody);
                                idNameBlock.append(commentId, commentName);
                            }
                            btn.disabled = true;
                        }
                    })
            })

            container.appendChild(divPost);
            divPost.append(idBtnDiv, userTitle, userBody);
            idBtnDiv.append(userId, btn);
        }
    })