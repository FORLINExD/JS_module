// 1 - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//     Протестувати на значеннях
//     someemail@gmail.com
//     someeMAIL@gmail.com
//     someeMAIL@i.ua
//     some.email@gmail.com



// 2 - є масив... відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// let arrSort = (arr) => arr.sort((a, b) => b.modules.length - a.modules.length);
// console.log(arrSort(coursesArray));



// 3 - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
//     document.writeln(count(str, symb)) // 5
//
// let test = "Астрономия это наука о небесных объектах";
// let count = (str, stringSearch) => {
//     let res = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === stringSearch) {
//             res.push(str[i]);
//         }
//     }
//     return res;
// }
// console.log(count(test, 'о'));


// 4 - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
//     document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
// let stringToCut = 'Сила тяжести приложена к центру масс тела';
// let cutString = (str, n) => str.split(' ').splice(0, n).join(' ');
// console.log(cutString(stringToCut, 5))