// Зробити свій розпорядок дня.
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
// І так далі


// function schedule() {
//     setTimeout(() => {
//         console.log('1 - Прокинувся')
//         setTimeout(() => {
//             console.log('2 - Вмився')
//             setTimeout(() => {
//                 console.log('3 - Поснідав')
//                 setTimeout(() => {
//                     console.log('4 - Пішов на роботу')
//                     setTimeout(() => {
//                         console.log('5 - Попрацював')
//                         setTimeout(() => {
//                             console.log('6 - Пообідав')
//                             setTimeout(() => {
//                                 console.log('7 - Ще попрацював')
//                                 setTimeout(() => {
//                                     console.log('8 - Пішов додому')
//                                     setTimeout(() => {
//                                         console.log('9 - Повечеряв')
//                                         setTimeout(() => {
//                                             console.log('10 - Подивився фільм')
//                                             setTimeout(() => {
//                                                 console.log('11 - Підготувався до сну')
//                                                 setTimeout(() => {
//                                                     console.log('12 - Ліг спати')
//                                                 }, 350)
//                                             }, 600)
//                                         }, 1200)
//                                     }, 50)
//                                 }, 200)
//                             }, 2000)
//                         }, 450)
//                     }, 3000)
//                 }, 1500)
//             }, 500)
//         }, 100)
//     }, 300)
//
// }
//
// schedule();




//////////////////////////////////////////   Promise
//
// function wakeUp () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('1 - Прокинувся');
//         }, 300)
//     })
// }
// function washed () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('2 - Вмився');
//         }, 100)
//     })
// }
// function breakfast () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('3 - Поснідав');
//         }, 500)
//     })
// }
// function goToWork () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('4 - Пішов на роботу');
//         }, 1500)
//     })
// }
// function work () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('5 - Попрацював');
//         }, 3000)
//     })
// }
// function lunch () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('6 - Пообідав');
//         }, 450)
//     })
// }
// function moreWork () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('7 - Ще попрацював');
//         }, 2000)
//     })
// }
// function goHome () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('8 - Пішов додому');
//         }, 200)
//     })
// }
// function dinner () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('9 - Повечеряв');
//         }, 50)
//     })
// }
// function watchMovie () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('10 - Подивився фільм');
//         }, 1200)
//     })
// }
// function prepareToSleep () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('11 - Підготувався до сну');
//         }, 600)
//     })
// }
// function wentSleep () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('12 - Ліг спати');
//         }, 350)
//     })
// }
//
// wakeUp()
//     .then((wakeUp) => {
//         console.log(wakeUp)
//         return washed();
//     })
//     .then((washed) => {
//         console.log(washed)
//         return breakfast();
//     })
//     .then((breakfast) => {
//         console.log(breakfast)
//         return goToWork();
//     })
//     .then((washed) => {
//         console.log(washed)
//         return work();
//     })
//     .then((work) => {
//         console.log(work)
//         return lunch();
//     })
//     .then((lunch) => {
//         console.log(lunch)
//         return moreWork();
//     })
//     .then((moreWork) => {
//         console.log(moreWork)
//         return goHome();
//     })
//     .then((goHome) => {
//         console.log(goHome)
//         return dinner();
//     })
//     .then((dinner) => {
//         console.log(dinner)
//         return watchMovie();
//     })
//     .then((watchMovie) => {
//         console.log(watchMovie)
//         return prepareToSleep();
//     })
//     .then((prepareToSleep) => {
//         console.log(prepareToSleep)
//         return wentSleep();
//     })
//     .then((wentSleep) => {
//         console.log(wentSleep)
//     })




/////////////////////////////////////  async await
//
// function wakeUp () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('1 - Прокинувся');
//         }, 300)
//     })
// }
// function washed () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('2 - Вмився');
//         }, 100)
//     })
// }
// function breakfast () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('3 - Поснідав');
//         }, 500)
//     })
// }
// function goToWork () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('4 - Пішов на роботу');
//         }, 1500)
//     })
// }
// function work () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('5 - Попрацював');
//         }, 3000)
//     })
// }
// function lunch () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('6 - Пообідав');
//         }, 450)
//     })
// }
// function moreWork () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('7 - Ще попрацював');
//         }, 2000)
//     })
// }
// function goHome () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('8 - Пішов додому');
//         }, 200)
//     })
// }
// function dinner () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('9 - Повечеряв');
//         }, 50)
//     })
// }
// function watchMovie () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('10 - Подивився фільм');
//         }, 1200)
//     })
// }
// function prepareToSleep () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('11 - Підготувався до сну');
//         }, 600)
//     })
// }
// function wentSleep () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('12 - Ліг спати');
//         }, 350)
//     })
// }
//
// async function routine() {
//     const meWakeup = await wakeUp();
//     const meWashed = await washed();
//     const meBreakfast = await breakfast();
//     const meGoToWork = await goToWork();
//     const meWork = await work();
//     const meLunch = await lunch();
//     const meMoreWork = await moreWork();
//     const meGoHome = await goHome();
//     const meDinner = await dinner();
//     const meWatchMovie = await watchMovie();
//     const mePrepareToSleep = await prepareToSleep();
//     const meWentSleep = await wentSleep();
//
//     console.log(meWakeup);
//     console.log(meWashed);
//     console.log(meBreakfast);
//     console.log(meGoToWork);
//     console.log(meWork);
//     console.log(meLunch);
//     console.log(meMoreWork);
//     console.log(meGoHome);
//     console.log(meDinner);
//     console.log(meWatchMovie);
//     console.log(mePrepareToSleep);
//     console.log(meWentSleep);
// }
// routine();

