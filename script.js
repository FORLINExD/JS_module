// 1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//     створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let usersArr1 = [
//     new User(42, 'Luis', 'Bowman', 'luis_bow321@gmail.com', '+1 501-871-0178'),
//     new User(23, 'Sullivan', 'Gomez', 'gomezsul@gmail.com', '+1 505-578-2560'),
//     new User(54, 'Danna', 'Gibson', 'gomezsul@gmail.com', '+1 212-855-3813'),
//     new User(20, 'Calvin', 'Dixon', 'calvindix64@gmail.com', '+1 209-604-3088'),
//     new User(8, 'Andrew', 'Gardner', 'andrew_gard@gmail.com', '+1 582-465-1580'),
//     new User(95, 'Nick', 'Lynch', 'nicklynch185@gmail.com', '+1 212-398-3983'),
//     new User(49, 'Jair', 'Stokes', 'jair_s321@gmail.com', '+1 214-865-4424'),
//     new User(81, 'Cedric', 'Newton', 'cedric_newton@gmail.com', '+1 582-400-2813'),
//     new User(37, 'Camden', 'Cardenas', 'camden_cam67@gmail.com', '+1 202-801-8471'),
//     new User(3, 'Payton', 'Bradford', 'p_bradford69@gmail.com', '+1 582-300-1862'),
// ]
// console.log(usersArr1)


// 2 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let userPairFilter = (userArr) => userArr.filter(userId => userId.id % 2 === 0);
// console.log(userPairFilter(usersArr1));


// 3 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let userAscendingSort = (userArr) => userArr.sort((a, b) => a.id - b.id);
// console.log(userAscendingSort(usersArr1));


// 4 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//     створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = [order]
//     }
// }
//
let clientsArr = [
    new Client(77, 'Luis', 'Bowman', 'luis_bow321@gmail.com', '+1 501-871-0178', ['headphones', 'toilet paper']),
    new Client(1, 'Sullivan', 'Gomez', 'gomezsul@gmail.com', '+1 505-578-2560', ['iphone 11']),
    new Client(32, 'Danna', 'Gibson', 'gomezsul@gmail.com', '+1 212-855-3813', ['Hankey Bannister', 'Jim Beam White', 'scotch', 'beer', 'apple']),
    new Client(56, 'Calvin', 'Dixon', 'calvindix64@gmail.com', '+1 209-604-3088', ['Hoodie Lacoste', 'snickers Lacoste Game advance', 'jeans', 'black scarf']),
    new Client(10, 'Andrew', 'Gardner', 'andrew_gard@gmail.com', '+1 582-465-1580', ['Skechers', 'Puma X-Ray', 'cap']),
    new Client(5, 'Nick', 'Lynch', 'nicklynch185@gmail.com', '+1 212-398-3983', ['Asus webcam c3', 'red wine', 'bulb']),
    new Client(43, 'Jair', 'Stokes', 'jair_s321@gmail.com', '+1 214-865-4424', ['keyboard HATOR Rockfall EVO', 'mouse zowie ec-2']),
    new Client(25, 'Cedric', 'Newton', 'cedric_newton@gmail.com', '+1 582-400-2813', ['chair DXRACER MASTER']),
    new Client(81, 'Camden', 'Cardenas', 'camden_cam67@gmail.com', '+1 202-801-8471', ['razor philips OneBlade', 'foam for shaving Gillette series sensitive skin', 'extra razors']),
    new Client(6, 'Payton', 'Bradford', 'p_bradford69@gmail.com', '+1 582-300-1862', ['notebook MacBook Pro 16" M1', 'adapter Ugreen AV161']),
]
console.log(clientsArr)


// 5 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientOrderSort = (clientArr) => clientArr.sort((a, b) => a.order.length - b.order.length);
console.log(clientOrderSort(clientsArr))
