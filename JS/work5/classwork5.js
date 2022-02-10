// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minnumber = (a, b ,c) => {
    if (a < b && a < c) {
        console.log(a)
    } else if (b < a && b < c) {
        console.log(b)
    } else {
        console.log(c)
    }
}

minnumber(1, 2, 3)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxnumber = (a, b ,c) => {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b)
    } else {
        console.log(c)
    }
}

// - створити функцію яка повертає найбільше число з масиву

let maxArray = (array) => {
    let maxnumber = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxnumber) {
            maxnumber = array[i]
        }
    }
    return maxnumber
}

maxArray([1, 2, 3, 4, 5])

// - створити функцію яка повертає найменьше число з масиву

let minArray = (array) => {
    let minnumber = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minnumber) {
            minnumber = array[i]
        }
    }
    return minnumber
}

minArray([1, 2, 3, 4, 5])

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sum = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    return sum
}

sum([1, 2, 3, 4, 5])

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arithmetical = (array) => {
    let sum = 0
    let iteration = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
        iteration++
    }
    return sum / iteration
}

arithmetical([1, 2, 3, 4, 5])

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minNumbers = (...numbers) => {
    let minNumber = minArray(numbers)
    console.log(maxArray(numbers))
    return minNumber
}

minNumbers(1, 2, 3, 4, 5)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomArray = () => {
    let newArray = []
    for (let i = 0; i < 100; i++) {
        newArray[i] = Math.round(Math.random() * 100)
    }
    console.log(newArray)
    return newArray
}

randomArray()



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let arrayRandom = (limit) => {
    let newArray = []
    for (let i = 0; i < limit; i++) {
        newArray[i] = Math.round(Math.random() * 100)
    }
    return newArray
}

arrayRandom(10)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let invert = (array) => {
    let newArray = []
    let iteration = 0
    for (let i = array.length - 1; i >= 0; i--) {
        newArray[iteration] = array[i]
        iteration++
    }
    return newArray
}

invert([1,2,3])