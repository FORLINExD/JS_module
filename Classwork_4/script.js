// 1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function minNum(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         document.write(num1)
//     } else if (num2 < num1 && num2 < num3) {
//         document.write(num2)
//     } else if (num3 < num1 && num3 < num2) {
//         document.write(num3)
//     } else {
//         document.write('Try again')
//     }
// }
// minNum(321, 25, 64)


// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function maxNum(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1)
//     } else if (num2 > num1 && num2 > num3) {
//         document.write(num2)
//     } else if (num3 > num1 && num3 > num2) {
//         document.write(num3)
//     } else {
//         document.write('Try again')
//     }
// }
// maxNum(21, 57, 49)


// 3 - створити функцію яка повертає найбільше число з масиву
//
// let array = [53, 367, 127, 21, 254]
// function maxNumFromArr(num) {
//     let maxNum = num[0];
//     for (const element of num) {
//         if (element > maxNum) {
//             maxNum = element;
//         }
//     }
//     return maxNum;
// }
// console.log(maxNumFromArr(array));


// 4 - створити функцію яка повертає найменьше число з масиву
//
// let array = [53, 367, 127, 21, 254]
// function minNumFromArr(num) {
//     let minNum = num[0];
//     for (const element of num) {
//         if (element < minNum) {
//             minNum = element;
//         }
//     }
//     return minNum;
// }
// console.log(minNumFromArr(array));


// 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let array = [10, 15, 20, 25, -20]
// function sumOfNumbersInArray(sum) {
//     let sumNum = 0;
//     for (const sumElement of sum) {
//         sumNum = sumNum + sumElement;
//     }
//     return sumNum;
// }
// console.log(sumOfNumbersInArray(array))


// 6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let array = [8, 11, 8, 12, 9, 11, 7, 7, 9, 10]
// function arithmeticMean(sum) {
//     let sumNum = 0;
//     for (const sumElement of sum) {
//         sumNum = sumNum + sumElement;
//     }
//     return sumNum / sum.length;
// }
// console.log(arithmeticMean(array))


// 7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let arr = [132, 31, 104, 29, 96, 72]
// function minMaxArray(num) {
//     let maxNum = num[0];
//     let minNum = num[0];
//     for (const numElement of num) {
//         if (numElement > maxNum) {
//             maxNum = numElement;
//         }
//         if (numElement < minNum) {
//             minNum = numElement;
//         }
//     }
//     console.log(maxNum);
//     return minNum;
// }
// minMaxArray(arr)


// 8 - створити функцію яка заповнює масив рандомними числами
//     (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// function randomNumbers(array, length) {
//     for (let i = 0; i < length; i++) {
//         array[i] = Math.round(Math.random() * 100)
//     }
//     return array;
// }
// document.write(randomNumbers([], 20))


// 9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// function randomNumbers(array, length, limit) {
//     for (let i = 0; i < length; i++) {
//         array[i] = Math.round(Math.random() * limit)
//     }
//     return array;
// }
// document.write(`${randomNumbers([], 20, 500)}`)


// 10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// function reverseArray(arr) {
//     let newArray = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArray[ri] = arr[i];
//     }
//     return newArray;
// }
// console.log(reverseArray([1,2,3,4,5]))