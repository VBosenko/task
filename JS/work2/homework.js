// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 59;

if (true) {
    console.log(Math.floor(time / 15) + 1, 'частина години')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

let day = 31;

if (day >= 1 && day < 11) {
    console.log('Перша декада')
} else if ( day >= 11 && day < 21) {
    console.log('Друга декада')
} else if ( day >= 21 && day < 32) {
    console.log('Третя декада')
} else {

}

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта -
//     з коротким записом(тернаркою)

let test = true;
if (test != true) {
    console.log('Вірне буває тильки кохання =)')
} else {
    console.log('Неправильно')
}
test = !true ? 'Вірне буває тильки кохання =)' : 'Неправильно';
console.log(test)

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = -3
if (a != 0) {
    console.log('вірно')
}
else {
    console.log('невірно')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

//let dayOfWeek = prompt('day?');
let dayOfWeek = '2'
switch (dayOfWeek) {
    case '1':
        console.log('Work')
        break
    case '2':
        console.log('work')
        break
    case '3':
        console.log('work')
        break
    case '4':
        console.log('work')
        break
    case '5':
        console.log('work')
        break
    case '6':
        console.log('sleep')
        break
    case '7':
        console.log('chill')
        break
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let leapYear = 2020

if ((leapYear % 4) == 0) {
    console.log('високосний рік')
} else {
    console.log('ні')
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

//let question = prompt('Яка «офіційна» назва JavaScript?');
let question = 'ECMAScript'
if (question == 'ECMAScript') {
    console.log('Правильно!')
} else {
    console.log('Не знаєте? ECMAScript!')
}

