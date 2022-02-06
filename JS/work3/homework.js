// --створити масив з:
//     - з 5 числових значень
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numberArray = []
// for (let i = 0; i < 5; i++) {
//     numberArray[i] = i
// }
// let stringArray = ['first', 'two', 'free', 'four', 'five']
// let randomArray = [1, 2, 3, 'four', 'five', true, false]

// console.log(numberArray)
// console.log(stringArray)
// console.log(randomArray)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = "Jani";
// arr[1] = "Hege";
// arr[2] = "Stale";
// arr[3] = "Kai Jim";
// arr[4] = "Borge";

// console.log(arr)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>rnd text</div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>rnd text ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0
// while (i<20) {
//     document.write(`<div>rnd text</div>`)
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0
// while (i<20) {
//     document.write(`<div>rnd text ${i}</div>`)
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numberArrayTen = []
// for (let i = 0; i < 10; i++) {
//     numberArrayTen[i] = i
// }
// for (let numberArrayTenElement of numberArrayTen) {
//     console.log(numberArrayTenElement)
// }

// - Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

// let stringArrayTen = []
// for (let i = 0; i < 10; i++) {
//     stringArrayTen[i] = `number ${i}`
// }
// for (let stringArrayTenElement of stringArrayTen) {
//     console.log(stringArrayTenElement)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let randomArrayTen = []
// for (let i = 0; i < 10; i++) {
//     randomArrayTen[i] = `number ${i}`
// }
// for (let randomArrayTenElement of randomArrayTen) {
//     console.log(randomArrayTenElement)
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let originalArrayAllType = [1, 2, 3, 4, 5, 'six', 'seven', 'eight', 'nine', 'ten', true, false]
// for (let i = 0; i < originalArrayAllType.length; i++) {
//     if (typeof (originalArrayAllType[i]) === "boolean") {
//         console.log(originalArrayAllType[i])
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let originalArrayAllType = [1, 2, 3, 4, 5, 'six', 'seven', 'eight', 'nine', 'ten', true, false]
// for (let i = 0; i < originalArrayAllType.length; i++) {
//     if (typeof (originalArrayAllType[i]) === "number") {
//         console.log(originalArrayAllType[i])
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let originalArrayAllType = [1, 2, 3, 4, 5, 'six', 'seven', 'eight', 'nine', 'ten', true, false]
// for (let i = 0; i < originalArrayAllType.length; i++) {
//     if (typeof (originalArrayAllType[i]) === "string") {
//         console.log(originalArrayAllType[i])
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let numberArrayRandom = []
// for (let i = 0; i < 5; i=i+2) {
//     numberArrayRandom[i] = i
//     numberArrayRandom[i+1] = `number ${i+1}`
// }
// for (let numberArrayRandomElement of numberArrayRandom) {
//     console.log(numberArrayRandomElement)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i=i+2) {
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//         document.write(`<div>${i}</div>`)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//         document.write(`<div>${i}</div>`)
//     }
// }