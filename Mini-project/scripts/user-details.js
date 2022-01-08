// console.log(JSON.parse(localStorage.getItem('userData')));

const detailsContainer = document.body.appendChild(document.createElement('div'));
detailsContainer.classList.add('details__container')

const userData = JSON.parse(localStorage.getItem('userData'))

const detailsUserBlock = document.createElement('div');
detailsUserBlock.classList.add('details__user_block')

const detailsUserId = document.createElement('h3');
detailsUserId.id = 'detailsUserId'
detailsUserId.innerHTML = `ID: ${userData.id}`;

const detailsUserName = document.createElement('h3');
detailsUserName.innerHTML = `Name: ${userData.name}`;

const detailsUsername = document.createElement('h4');
detailsUsername.innerHTML = `Username: ${userData.username}`;

const detailsEmail = document.createElement('p');
detailsEmail.innerHTML = `Email: ${userData.email}`;


const detailsAddressBlock = document.createElement('div');
detailsAddressBlock.classList.add('details__address');
detailsAddressBlock.innerHTML = `<h4>Address:</h4>`

const detailsAddressStreet = document.createElement('p');
detailsAddressStreet.innerHTML = `Street: ${userData.address.street}`;

const detailsAddressSuite = document.createElement('p');
detailsAddressSuite.innerHTML = `Suite: ${userData.address.suite}`;

const detailsAddressCity = document.createElement('p');
detailsAddressCity.innerHTML = `City: ${userData.address.city}`;

const detailsAddressZipcode = document.createElement('p');
detailsAddressZipcode.innerHTML = `Zipcode: ${userData.address.zipcode}`;


const detailsAddressGeoBlock = document.createElement('div');
detailsAddressGeoBlock.classList.add('details__address_geo');
detailsAddressGeoBlock.innerHTML = `<h4>Geo:</h4>`

const detailsAddressGeoLat = document.createElement('p');
detailsAddressGeoLat.innerHTML = `Lat: ${userData.address.geo.lat}`;

const detailsAddressGeoLng = document.createElement('p');
detailsAddressGeoLng.innerHTML = `Lng: ${userData.address.geo.lng}`;


const detailsPhone = document.createElement('p');
detailsPhone.innerHTML = `Phone: ${userData.phone}`;

const detailsWebsite = document.createElement('p');
detailsWebsite.innerHTML = `Website: ${userData.website}`;

const detailsCompany = document.createElement('div');
detailsCompany.classList.add('details__company');
detailsCompany.innerHTML = `<h4>Company:</h4>`;

const detailsCompanyName = document.createElement('p');
detailsCompanyName.innerHTML = `Name: ${userData.company.name}`;

const detailsCompanyCatchPhrase = document.createElement('p');
detailsCompanyCatchPhrase.innerHTML = `Catch phrase: ${userData.company.catchPhrase}`;

const detailsCompanyBs = document.createElement('p');
detailsCompanyBs.innerHTML = `bs: ${userData.company.bs}`;


const detailsButton = document.createElement('button');
detailsButton.id = 'details__btn';
detailsButton.innerHTML = 'Post of current user';

detailsButton.onclick = () => {
    detailsButton.disabled = true;

    const userPostTitleBlock = document.createElement('div');
    userPostTitleBlock.classList.add('user__post_title');

    fetch(`https://jsonplaceholder.typicode.com/users/${userData.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                const userPosts = document.createElement('p');
                userPosts.classList.add('user__posts');
                userPosts.innerHTML = post.title;

                const postDetailBtn = document.createElement('button');
                postDetailBtn.id = 'post__details_btn';
                postDetailBtn.innerHTML = 'Post details';

                postDetailBtn.onclick = () =>  {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
                        .then(response => response.json())
                        .then(post => {
                            localStorage.setItem('userPost', JSON.stringify(post))
                            document.location = 'post-details.html'
                        })
                }

                userPostTitleBlock.appendChild(userPosts);
                userPosts.appendChild(postDetailBtn)
            }
        })


    detailsContainer.appendChild(userPostTitleBlock);
}


detailsContainer.appendChild(detailsUserBlock);
detailsUserBlock.append(detailsUserId, detailsUserName, detailsUsername, detailsEmail, detailsAddressBlock, detailsPhone, detailsWebsite, detailsCompany, detailsButton);
detailsAddressBlock.append(detailsAddressStreet, detailsAddressSuite, detailsAddressCity, detailsAddressZipcode, detailsAddressGeoBlock);
detailsAddressGeoBlock.append(detailsAddressGeoLat, detailsAddressGeoLng)
detailsCompany.append(detailsCompanyName, detailsCompanyCatchPhrase, detailsCompanyBs);
