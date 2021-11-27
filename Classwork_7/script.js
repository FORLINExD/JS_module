// 1 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//   -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//   -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//   -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//   -- changeYear (newValue) - змінює рік випуску на значення newValue
//   -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, factory, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.factory = factory;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(`${key} - ${this[key]}`)
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let bugatti = new Car('Bugatti Chiron', 'Molsheim, France', 2016, 420, 8.0);
// console.log(bugatti)
// bugatti.drive()
// bugatti.info()
// bugatti.increaseMaxSpeed(10)
// bugatti.changeYear(2010)
// bugatti.addDriver('Yarik Vadila')


// 2 - (Те саме, тільки через клас)
//
// class Car2 {
//     constructor(model, factory, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.factory = factory;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         }
//     }
//
//     info() {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(`${key} - ${this[key]}`)
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
// }
//
// let bugatti = new Car2('Bugatti Chiron', 'Molsheim, France', 2016, 420, 8.0);
// console.log(bugatti);
// bugatti.drive();
// bugatti.info();
// bugatti.increaseMaxSpeed(10);
// bugatti.changeYear(2010);
// bugatti.addDriver('Yarik Vadila');


// 3 - створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinderellaArr = [
//     new Cinderella('Anna', 19, 34),
//     new Cinderella('Roxy', 20, 29),
//     new Cinderella('Lina', 17, 31),
//     new Cinderella('Nani', 24, 30),
//     new Cinderella('Anna', 25, 28),
//     new Cinderella('Julia', 16, 25),
//     new Cinderella('Monica', 23, 40),
//     new Cinderella('Katie', 20, 38),
//     new Cinderella('Daria', 18, 36),
//     new Cinderella('Mary', 21, 44),
// ]
// console.log(cinderellaArr);


//      Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class Prince {
//     constructor(name, age, foundShoe) {
//         this.name = name;
//         this.age = age;
//         this.foundShoe = foundShoe;
//     }
// }
//
// let prince = new Prince('Prince Charming', 21, 34);


//      За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// let findCinderella = (cinderellaArr, prince) => {
//     for (const element of cinderellaArr) {
//         if (element.footSize === prince.foundShoe) {
//             return(`True Cinderella is - ${element.name}`)
//         }
//
//     }
// }
//
// console.log(findCinderella(cinderellaArr, prince));


//      Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// let newCinderella = () => cinderellaArr.find((element) => element.footSize === prince.foundShoe);
// console.log(newCinderella());