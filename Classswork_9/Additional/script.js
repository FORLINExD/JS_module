// - Є масив :
//   Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

for (const element of usersList) {
    const mainContainer = document.createElement('div');
    mainContainer.style.maxWidth = '1200px';
    mainContainer.style.margin = '0 auto';
    mainContainer.style.marginBottom = '10px';
    mainContainer.style.backgroundColor = '#222222'
    mainContainer.style.color = '#ffffff'
    mainContainer.style.fontFamily = 'Arial';
    mainContainer.style.padding = '10px';

    const h3Id = document.createElement('h3');
    h3Id.innerText = `ID: ${element.id}`;

    const h2Name = document.createElement('h2');
    h2Name.innerText = `Name: ${element.name}`;

    const h2Username = document.createElement('h2');
    h2Username.innerText = `Username: ${element.username}`;

    const h3Email = document.createElement('h3');
    h3Email.innerText = `Email: ${element.email}`;

    const divAddress = document.createElement('div');
    divAddress.classList.add('address');
    divAddress.innerHTML = `<h2>Address:</h2>`;
    divAddress.style.backgroundColor = '#373737'
    divAddress.style.padding = '10px';
    divAddress.style.margin = '10px 0';

    const h4Street = document.createElement('h4');
    h4Street.innerText = `Street: ${element.address.street}`;

    const h4Suite = document.createElement('h4');
    h4Suite.innerText = `Suite: ${element.address.suite}`;

    const h4City = document.createElement('h4');
    h4City.innerText = `City: ${element.address.city}`;

    const h4Zipcode = document.createElement('h4');
    h4Zipcode.innerText = `Zipcode: ${element.address.zipcode}`;

    const divGeo = document.createElement('div');
    divGeo.innerHTML = `<h4>Geo:</h4>`;
    divGeo.style.backgroundColor = '#5a5a5a'
    divGeo.style.padding = '10px';
    divGeo.style.margin = '10px 0';

    const h5Lat = document.createElement('h5');
    h5Lat.innerText = `lat: ${element.address.geo.lat}`;

    const h5Lng = document.createElement('h5')
    h5Lng.innerText = `lng: ${element.address.geo.lng}`;

    const h3Phone = document.createElement('h3');
    h3Phone.innerText = `Phone: ${element.phone}`;

    const h3Website = document.createElement('h3');
    h3Website.innerText = `Website: ${element.website}`;

    const divCompany = document.createElement('div');
    divCompany.innerHTML = `<h4>Company:</h4>`;
    divCompany.style.backgroundColor = '#373737'
    divCompany.style.padding = '10px';
    divCompany.style.margin = '10px 0';

    const h5Name = document.createElement('h5');
    h5Name.innerText = `Name: ${element.company.name}`;

    const h5CatchPhrase = document.createElement('h5');
    h5CatchPhrase.innerText = `Catch phrase: ${element.company.catchPhrase}`;

    const h5Bs = document.createElement('h5');
    h5Bs.innerText = `Bs: ${element.company.bs}`;


    document.body.appendChild(mainContainer);
    mainContainer.appendChild(h3Id);
    mainContainer.appendChild(h2Name);
    mainContainer.appendChild(h2Username);
    mainContainer.appendChild(h3Email);
    mainContainer.appendChild(divAddress);
    divAddress.appendChild(h4Street);
    divAddress.appendChild(h4Suite);
    divAddress.appendChild(h4City);
    divAddress.appendChild(h4Zipcode);
    divAddress.appendChild(divGeo);
    divGeo.appendChild(h5Lat);
    divGeo.appendChild(h5Lng);
    mainContainer.appendChild(h3Phone);
    mainContainer.appendChild(h3Website);
    mainContainer.appendChild(divCompany);
    divCompany.appendChild(h5Name);
    divCompany.appendChild(h5CatchPhrase);
    divCompany.appendChild(h5Bs);
}