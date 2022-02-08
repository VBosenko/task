// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a, b) {
    return a * b
}


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle(r) {
    return r * r * 3.14
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(h, r) {
    return 2 * 3.14 * r * h + 2 * 3.14 * r * r
}

// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayIter(array) {
    for (let number of array) {
        console.log(number)
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function pCreator(string) {
    document.write(`<p>${string}</p>`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function liCreator(li) {
    document.write(`<ul>`)
    document.write(`<li>${li}</li>`)
    document.write(`<li>${li}</li>`)
    document.write(`<li>${li}</li>`)
    document.write(`</ul>`)
}

//  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. 
//    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function liCreatorNumber(li, number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++){
        document.write(`<li>${li} ${i}</li>`)
    }
    document.write(`</ul>`)
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arraySymbols(...arc) {
    document.write(`<ul>`)
    for (let i = 0; i < arc.length; i++){
        document.write(`<li>${arc[i]}</li>`)
    }
    document.write(`</ul>`)
}

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. 
//   Для кожного об'єкту окремий блок.

function arrayObjects(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>${array[i].id} ${array[i].name} ${array[i].age}</div>`)
    }
}