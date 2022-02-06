// 1. Створити пустий масив та :

let arrayOne = []

//     a. заповнити його 50 парними числами за допомоги циклу.

// for (let i = 0; i < 100; i=i+2) {
//     arrayOne[i / 2] = i
// }
// console.log(arrayOne)

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let j = 0
// for (let i = 1; i < 100; i=i+2) {
//     arrayOne[j] = i
//     j++
// }
// console.log(arrayOne)

// or

// for (let i = 1; i < 100; i=i+2) {
//     arrayOne[i / 2 - 0.5] = i
// }
// console.log(arrayOne)


//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)

// let arrayRandom = []
//
// for (let i = 0; i < 20; i++) {
//     arrayRandom[i] = Math.floor(Math.random() * 100);  //Math.floor тут для зручності
// }

// d. Заповнити масив 20 ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)


// основний масив для завдань 2-4 //

let numberMin = 8
let numberMax = 732

let arrayRandomMax = []

for (let i = 0; i < 20; i++) {
    arrayRandomMax[i] = Math.floor(Math.random() * (numberMax - numberMin) + numberMin);  //Math.floor тут для зручності
}

// 2. Вивести за допомогою console.log кожен третій елемент

// for (let i = 0; i < arrayRandomMax.length; i++) {
//     if (i % 3 === 0) {
//         console.log(arrayRandomMax[i])
//     }
// }

// 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.

for (let i = 0; i < arrayRandomMax.length; i++) {
    if (i % 3 === 0 && arrayRandomMax[i] % 2 ===0) {
        console.log(arrayRandomMax[i])
    }
}

// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив

// let arrayNew = []
// let itemNew = 0
//
//  for (let i = 0; i < arrayRandomMax.length; i++) {
//     if (i % 3 === 0 && arrayRandomMax[i] % 2 === 0) {
//         console.log(arrayRandomMax[i])
//         arrayNew[itemNew] = arrayRandomMax[i]
//         itemNew++
//     }
// }

// 5. Вивести кожен елемент масиву, сусід справа якого є парним

// let arrayRandomExample = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
//
// for (let i = 0; i < arrayRandomExample.length; i++) {
//     if ((arrayRandomExample[i+1]) % 2 === 0) {
//         console.log(arrayRandomExample[i])
//     }
// }

// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arrayCost = [100, 250, 50, 168, 120, 345, 188]
//
// let sumCostOfProduct = 0
// let j = 0
//
// for (let i = 0; i < arrayCost.length; i++) {
//     sumCostOfProduct = sumCostOfProduct + arrayCost[i]
//     console.log(i)
//     j++
// }
// console.log(sumCostOfProduct/j)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arrayRandomItem = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
// let arraySecond = []
//
// for (let i = 0; i < arrayRandomItem.length; i++) {
//     arraySecond[i] = arrayRandomItem[i] * 5
// }
// console.log(arrayRandomItem)
// console.log(arraySecond)

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let newArray = ['one', 'two', 'three', 'four', 'five', 6, 7, 8, 9, 10, true, false]
//
// let newArrayNumber = []
// let iteration = 0
//
// for (let i = 0; i < newArray.length; i++) {
//     if (typeof newArray[i] === "number") {
//         newArrayNumber[iteration] = newArray[i]
//         iteration++
//     }
// }

//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// let usersWithId = [
//     {id: 1, name: 'Vasyl', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'Olha', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = []
//
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         usersWithCities[i] = usersWithId [i]
//         if (usersWithId[i].id === citiesWithId[j].user_id) {
//             usersWithCities[i].address = citiesWithId[j]
//         }
//     }
// }
//
// console.log(usersWithCities)

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'Vasyl',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Kyiv'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]


//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let newArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
//
// for (let a = 0; a < newArray.length; a++) {
//     if (newArray[a] % 2 === 0) {
//         console.log(newArray[a])
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let newArrayAnother = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
//
// let newArrayBlank = []
//
// for (let i = 0; i < newArrayAnother.length; i++) {
//     newArrayBlank[i] = newArrayAnother[i]
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arrayString = ['a', 'b', 'c']
// let string = ''
//
// for (let i = 0; i < arrayString.length; i++) {
//     string = string + arrayString[i]
// }
// console.log(string)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arrayString = ['a', 'b', 'c']
// let string = ''
// let i = 0
//
// while (i < arrayString.length) {
//     string = string + arrayString[i]
//     i++
// }
// console.log(string)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arrayString = ['a', 'b', 'c']
// let string = ''
//
// for (let stringElement of arrayString) {
//     string = string + stringElement
// }
// console.log(string)

