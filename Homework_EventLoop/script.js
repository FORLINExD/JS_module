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


//////////////////////////////////   Callback
//
// const wakeUp = (cb) => setTimeout(() => {
//     cb('1 - Прокинувся');
// }, 300);
// const washed = (cb) => setTimeout(() => {
//     cb('2 - Вмився');
// }, 100);
// const breakfast = (cb) => setTimeout(() => {
//     cb('3 - Поснідав');
// }, 500);
// const goToWork = (cb) => setTimeout(() => {
//     cb('4 - Пішов на роботу');
// }, 1500);
// const work = (cb) => setTimeout(() => {
//     cb('5 - Попрацював');
// }, 3000);
// const lunch = (cb) => setTimeout(() => {
//     cb('6 - Пообідав');
// }, 450);
// const moreWork = (cb) => setTimeout(() => {
//     cb('7 - Ще попрацював');
// }, 2000);
// const goHome = (cb) => setTimeout(() => {
//     cb('8 - Пішов додому');
// }, 200);
// const dinner = (cb) => setTimeout(() => {
//     cb('9 - Повечеряв');
// }, 50);
// const watchMovie = (cb) => setTimeout(() => {
//     cb('10 - Подивився фільм');
// }, 1200);
// const prepareToSleep = (cb) => setTimeout(() => {
//     cb('11 - Підготувався до сну');
// }, 600);
// const wentSleep = (cb) => setTimeout(() => {
//     cb('12 - Ліг спати');
// }, 350);
//
// wakeUp((msg) => {
//     console.log(msg);
//     washed((msg) => {
//         console.log(msg);
//         breakfast((msg) => {
//             console.log(msg);
//             goToWork((msg) => {
//                 console.log(msg);
//                 work((msg) => {
//                     console.log(msg);
//                     lunch((msg) => {
//                         console.log(msg);
//                         moreWork((msg) => {
//                             console.log(msg);
//                             goHome((msg) => {
//                                 console.log(msg);
//                                 dinner((msg) => {
//                                     console.log(msg);
//                                     watchMovie((msg) => {
//                                         console.log(msg);
//                                         prepareToSleep((msg) => {
//                                             console.log(msg);
//                                             wentSleep((msg) => {
//                                                 console.log(msg);
//                                             })
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


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
function wakeUp() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('1 - Прокинувся');
        }, 300)
    })
}

function washed() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('2 - Вмився');
        }, 100)
    })
}

function breakfast() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3 - Поснідав');
        }, 500)
    })
}

function goToWork() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('4 - Пішов на роботу');
        }, 1500)
    })
}

function work() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('5 - Попрацював');
        }, 3000)
    })
}

function lunch() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('6 - Пообідав');
        }, 450)
    })
}

function moreWork() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('7 - Ще попрацював');
        }, 2000)
    })
}

function goHome() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('8 - Пішов додому');
        }, 200)
    })
}

function dinner() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('9 - Повечеряв');
        }, 50)
    })
}

function watchMovie() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('10 - Подивився фільм');
        }, 1200)
    })
}

function prepareToSleep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('11 - Підготувався до сну');
        }, 600)
    })
}

function wentSleep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('12 - Ліг спати');
        }, 350)
    })
}


async function routine() {
    try {
        let res = await wakeUp();
        console.log(res);

        res = await washed();
        console.log(res);

        res = await breakfast();
        console.log(res);

        res = await goToWork();
        console.log(res);

        res = await work();
        console.log(res);

        res = await lunch();
        console.log(res);

        res = await moreWork();
        console.log(res);

        res = await goHome();
        console.log(res);

        res = await dinner();
        console.log(res);

        res = await watchMovie();
        console.log(res);

        res = await prepareToSleep();
        console.log(res);

        res = await wentSleep();
        console.log(res);

    } catch (e) {
        console.error(e)
    }
}

routine();



