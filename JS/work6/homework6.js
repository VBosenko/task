// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

console.log(('hello world').length)
console.log(('lorem ipsum').length)
console.log(('javascript is cool').length)


// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

console.log(('hello world').toUpperCase())
console.log(('lorem ipsum').toUpperCase())
console.log(('javascript is cool').toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(('HELLO WORLD').toLowerCase())
console.log(('LOREM IPSUM').toLowerCase())
console.log(('JAVASCRIPT IS COOL').toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let clearString = (string) => string = string.replace(' d', 'd').replace('   ', '')

console.log(clearString(' dirty string   '))


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToArray = (string) => string.split(' ')

// console.log(stringToArray('Каждый охотник желает знать'))

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається
// із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (string, i) => string.substring(0, i)

// console.log(delete_characters('Каждый охотник желает знать', 7))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-)
// між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (string) => string.replaceAll(' ', '-').toUpperCase()

let str = "HTML JavaScript PHP"
console.log(insert_dash(str))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
// з нижнього регістру у верхній.

let stringUpFirst = (string) => string.replace(string[0], string[0].toUpperCase())

console.log(stringUpFirst('asd asdqwe asd'))


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitaliz = (string) => {
    string = string.split(' ')
    for (let i = 0; i < string.length; i++){
        string[i] = string[i].replace(string[i][0], string[i][0].toUpperCase())
    }
    return string.join(' ')
}


console.log(capitaliz('hello wrold, asd asdawqe'))