// 1 - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
//   Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// class User {
//     constructor(id, name, username, email, adrStreet, adrSuite, adrCity, adrZipcode, geoLat, geoLng, phone, website, comName, comCatchPhrase, comBs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {street: adrStreet, suite: adrSuite, city: adrCity, zipcode: adrZipcode, geo: {lat: geoLat, lng: geoLng}};
//         this.phone = phone;
//         this.website = website;
//         this.company = {name: comName, CatchPhrase: comCatchPhrase, bs: comBs};
//     }
// }
//
// let user1 = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
// console.log(user1)

// // document.write(`<h3> ID: ${user1.id} </br> Name: ${user1.name} </br> Username: ${user1.username} </br> Email: ${user1.email} </br> Address: ${user1.address.street} | suite: ${user1.address.suite} | city: ${user1.address.city} | zipcode: ${user1.address.zipcode} </br> lat: ${user1.address.geo.lat} | lng: ${user1.address.geo.lng} </br> phone: ${user1.phone} </br> website: ${user1.website} </br> Company: ${user1.company.name} | CathPhrase: ${user1.company.CatchPhrase} | bs: ${user1.company.bs} </h3>`)





// 2 - Створити функцію конструктор / клас  який описує об'єкт тегу
//      Поля :
//       - назва тегу ()
//       - опис його дій
//       - масив з атрибутами (2-3 атрибути максимум)
//    Кожен атрибут описати як окремий який буде містити
//       -назву атрибуту
//       -опис дії атрибуту
//    інформацію брати з htmlbook.ru
//
//    Таким чином описати теги
//      -a
//      -div
//      -h1
//      -span
//      -input
//      -form
//      -option
//      -select
//
// class Tags {
//     constructor(tagName, tagDescription, attribName1, attribDescription1, attribName2, attribDescription2, attribName3, attribDescription3) {
//         this.tagName = tagName;
//         this.tagDescription = tagDescription;
//         this.tagAttributes = {
//             attribName1: attribName1,
//             attribDescription1: attribDescription1,
//             attribName2: attribName2,
//             attribDescription2: attribDescription2,
//             attribName3: attribName3,
//             attribDescription3: attribDescription3
//         };
//     }
// }
//
// const tag1 = new Tags('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', 'href', 'Задает адрес документа, на который следует перейти.', 'rel', 'Атрибут rel определяет отношения между текущим документом и документом, на который ведет ссылка, заданная атрибутом href.', 'target', 'По умолчанию, при переходе по ссылке документ открывается в текущем окне или фрейме.');
// console.log(tag1);
//
// const tag2 = new Tags('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', 'align', 'Выравнивание содержимого контейнера <div> по краю.', 'title', 'Добавляет поясняющий текст к контейнеру <div> в виде всплывающей подсказки, которая отображается, когда курсор мыши задерживается на содержимом.');
// console.log(tag2);
//
// const tag3 = new Tags('<h1>', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.', 'align', 'Выравнивание заголовка текста по краю.');
// console.log(tag3);
//
// const tag4 = new Tags('<span>', 'Тег <span> предназначен для определения строчных элементов документа.', 'style', 'Атрибут style применяется для определения стиля элемента с помощью правил CSS.');
// console.log(tag4);
//
// const tag5 = new Tags('<input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', 'form', 'Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.', 'placeholder', 'Выводит текст внутри поля формы, который исчезает при получении фокуса.');
// console.log(tag5);
//
// const tag6 = new Tags('<form>', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.', 'action', 'Указывает обработчик, к которому обращаются данные формы при их отправке на сервер.', 'name', 'Определяет уникальное имя формы. Как правило, имя формы используется для доступа к ее элементам через скрипты.');
// console.log(tag6);
//
// const tag7 = new Tags('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', 'disabled', 'Блокирует элемент списка для его выбора.', 'label', 'Атрибут предназначен для указания метки пункта списка, сокращённой по сравнению с текстом внутри <option>.');
// console.log(tag7)
//
// const tag8 = new Tags('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', 'autofocus', 'Атрибут autofocus устанавливает, что список получает фокус после загрузки страницы, при этом список становится доступным для выбора пунктов, например, с помощью клавиатуры.', 'multiple', 'Наличие атрибута multiple сообщает браузеру отображать содержимое элемента <select> как список множественного выбора.');
// console.log(tag8)