// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let a = 3;
let b = 4;

if (a == b) {
    console.log('рівні')
} else if (a > b) {
    console.log('a > b')
} else {
    console.log('a < b')
}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let numberOfHouse = 40;

if (numberOfHouse > 1 && numberOfHouse < 21) {
    console.log('пергший')
} else if (numberOfHouse >= 21 && numberOfHouse < 49) {
    console.log('другий')
} else {
    console.log('третій')
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
//     якщо змінна не рівна 10 - тоді НЕВІРНО

let numberTen = 10

console.log((+numberTen === 10) ? 'ВІРНО' : 'НЕВІРНО')

// - Ми маємо змінну x в яку користувач задає значення, якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

let input = 'asd';
 if (typeof (input) == "number") {
     console.log(1)
 } else if (typeof (input) == "string") {
     console.log(2)
 } else if (typeof (input) == "boolean") {
    console.log(3)
} else if (typeof (input) == "object") {
    console.log(3)
} else {

 }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temperature = 11

console.log((temperature > 10 && temperature < 22) ? 'йди на навчання' : 'сиди вдома')

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що
//     число не вірне ... .

let lottery = '6'

switch (lottery) {
    case '1':
        console.log('авто')
        break
    case '2':
        console.log('мото')
        break
    case '3':
        console.log('телефон')
        break
    case '4':
        console.log('т.')
        break
    case '5':
        console.log('д.')
        break
}
if (lottery > 5) {
    console.log('число не вірне')
}

