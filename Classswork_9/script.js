// // - є масив ...
// // 1 - Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// for (const element of simpsons) {
//     let divMember = document.createElement('div');
//     divMember.classList.add('member');
//     divMember.innerHTML = `<h2>${element.name} ${element.surname}</h2> <h3> Age: ${element.age}</h3> <p>Info: ${element.info}</p>`;
//
//
//     document.body.appendChild(divMember);
// }


// // 2 - взяти попередній масив з сімпсонами.
// //    Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member
//
// for (const element of simpsons) {
//     let divMember = document.createElement('div');
//     divMember.classList.add('member');
//     let divInner = document.createElement('div');
//     divInner.innerHTML = `<h2>${element.name} ${element.surname}</h2> <h3> Age: ${element.age}</h3> <p>Info: ${element.info}</p>`;
//
//
//     document.body.appendChild(divMember);
//     divMember.appendChild(divInner);
// }



// //  3 - Є масив
// //  Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// //  Приклад структири знаходиться у файлі example.png
//
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let mainContainer = document.body.appendChild(document.createElement('div'));
mainContainer.classList.add('main__container');
mainContainer.style.maxWidth = '1800px';
mainContainer.style.margin = '0 auto';
mainContainer.style.borderRadius = '15px'
mainContainer.style.rowGap = '10px';
mainContainer.style.fontFamily = 'Arial';
mainContainer.style.backgroundColor = '#9d92f7'
mainContainer.style.boxShadow = '5px 5px 10px #333333';
mainContainer.style.color = '#ffffff';
for (const element of coursesArray) {

    let divInner = document.createElement('div');
    divInner.style.padding = '5px';

    let h1Title = document.createElement('h1');
    h1Title.innerText = element.title;
    h1Title.style.textAlign = 'center';
    h1Title.style.backgroundColor = '#544ab6';
    h1Title.style.borderRadius = '10px';

    let monthHourBlock = document.createElement('div');
    monthHourBlock.classList.add('month__hour_block');
    monthHourBlock.style.display = 'flex';
    monthHourBlock.style.columnGap = '5px';
    monthHourBlock.style.backgroundColor = '#544ab6';
    monthHourBlock.style.borderRadius = '10px';

    let h2MonthDur = document.createElement('h2');
    h2MonthDur.innerText = `Month duration: ${element.monthDuration}`;
    h2MonthDur.style.textAlign = 'center';
    h2MonthDur.style.flexBasis = '50%';

    let h2HourDur = document.createElement('h2');
    h2HourDur.innerText = `Hours duration: ${element.hourDuration}`;
    h2HourDur.style.textAlign = 'center';
    h2HourDur.style.flexBasis = '50%';

    let modulesContainer = document.createElement('div');
    modulesContainer.classList.add('modules__container');

    let ulModules = document.createElement('ul');
    ulModules.classList.add('modules');
    ulModules.style.listStyleType = 'none';

    for (const liModulesKey of element.modules) {
        let liModules = document.createElement('li');
        liModules.classList.add('modules__item');
        liModules.innerText = liModulesKey;
        liModules.style.borderLeft = '3px solid #544ab6';
        liModules.style.borderBottom = '3px solid #544ab6';
        liModules.style.borderBottomLeftRadius = '10px';
        liModules.style.paddingLeft = '5px';
        liModules.style.marginBottom = '5px';
        liModules.style.fontSize = '22px';


        ulModules.appendChild(liModules);
    }


    mainContainer.appendChild(divInner);
    divInner.appendChild(h1Title);
    divInner.appendChild(monthHourBlock);
    monthHourBlock.appendChild(h2MonthDur);
    monthHourBlock.appendChild(h2HourDur);
    divInner.appendChild(modulesContainer);
    modulesContainer.appendChild(ulModules);
}