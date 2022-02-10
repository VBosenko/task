// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let square = (a, b) => a * b

// - створити функцію яка обчислює та повертає площу кола

let areaCircle = (r) => r * r * 3.14

// - створити функцію яка обчислює та повертає площу циліндру

let areaCylinder = (h, r) => 2 * 3.14 * r * h + 2 * 3.14 * r * r

// - створити функцію яка приймає масив та виводить кожен його елемент

let arrayIter = (array)  => { for (let number of array) {console.log(number)}}

arrayIter([1, 2, 3, 4])

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let pCreator = (string)  => {
    document.write(`<p>${string}</p>`)
}

pCreator('string')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let liCreator = (li) => {
    document.write(`<ul>`)
    document.write(`<li>${li}</li>`)
    document.write(`<li>${li}</li>`)
    document.write(`<li>${li}</li>`)
    document.write(`</ul>`)
}

liCreator('li')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. 
//Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let liCreatorNumber = (li, number) => {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++){
        document.write(`<li>${li} ${i}</li>`)
    }
    document.write(`</ul>`)
}

liCreatorNumber(li, 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arraySymbols = (...arc) => {
    document.write(`<ul>`)
    for (let i = 0; i < arc.length; i++){
        document.write(`<li>${arc[i]}</li>`)
    }
    document.write(`</ul>`)
}

arraySymbols(1, 2, 3, 4, 5)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayObjects = (array) => {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>${array[i].id} ${array[i].name} ${array[i].age}</div>`)
    }
}

arrayObjects([1, 2, 3, 4, 5])