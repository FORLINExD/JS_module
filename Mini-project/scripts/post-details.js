const userPost = JSON.parse(localStorage.getItem('userPost'));


const postContainer = document.createElement('div');
postContainer.classList.add('post__container');

const idTitleDiv = document.createElement('div');
idTitleDiv.classList.add('id__title_div');

const postId = document.createElement('h3');
postId.innerHTML = `Id: ${userPost.id}`;

const postTitle = document.createElement('h3');
postTitle.innerHTML = `Title: ${userPost.title}`;

const postBody = document.createElement('p');
postBody.innerHTML = `${userPost.body}`;

const commentsContainer = document.createElement('div');
commentsContainer.classList.add('comments__container');

const postCommentsDiv = document.createElement('div');
postCommentsDiv.classList.add('post__comments')

const commentTitle = document.createElement('h2');
commentTitle.id = 'comments__title'
commentTitle.innerHTML = 'Current post comments'

fetch(`https://jsonplaceholder.typicode.com/posts/${userPost.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            const userComment = document.createElement('p');
            userComment.classList.add('user__comment');
            userComment.innerHTML = `${comment.body}`;

            postCommentsDiv.appendChild(userComment);
        }
    })



document.body.appendChild(postContainer);
postContainer.append(idTitleDiv, postBody, commentsContainer);
idTitleDiv.append(postId, postTitle);
commentsContainer.append(commentTitle, postCommentsDiv);



