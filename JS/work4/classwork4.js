// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minnumber(a, b ,c) {
    if (a < b && a < c) {
        console.log(a)
    } else if (b < a && b < c) {
        console.log(b)
    } else {
        console.log(c)
    }
}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxnumber(a, b ,c) {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b)
    } else {
        console.log(c)
    }
}

// - створити функцію яка повертає найбільше число з масиву

function maxArray(array) {
    let maxnumber = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxnumber) {
            maxnumber = array[i]
        }
    }
    return maxnumber
}
  
// - створити функцію яка повертає найменьше число з масиву

function minArray(array) {
    let minnumber = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minnumber) {
            minnumber = array[i]
        }
    }
    return minnumber
}


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sum(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    return sum
}


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arithmetical(array) {
    let sum = 0
    let iteration = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
        iteration++
    }
    return sum / iteration
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minNumbers(...numbers) {
    let minNumber = minArray(numbers)
    console.log(maxArray(numbers))
    return minNumber
}

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randomArray() {
    let newArray = []
    for (let i = 0; i < 100; i++){
        newArray[i] = Math.round(Math.random()*100)
    }
    console.log(newArray)
    return newArray
}



Math.round(Math.random()*100)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function arrayRandom (limit) {
    let newArray = []
    for (let i = 0; i < limit; i++){
        newArray[i] = Math.round(Math.random()*100)
    }
    return newArray
}


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function invert(array) {
    let newArray = []
    let itteration = 0
    for (let i = array.length - 1; i > 0; i--) {
        newArray[0] = array[i]
    }
}

