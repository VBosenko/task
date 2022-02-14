// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// let cutString = (str, n) => {
//     str = str.split('')
//     j = 1
//     for (let i = 0; i < str.length; i++) {
//         if (j % n === 0) {
//             str[i] = str[i] + ' '
//             j++
//         } else {
//             j++
//         }
//     }
//     str = str.join('').split(' ')
//     return str
// }
// console.log(cutString('наслаждение', 3))

// - Створити функцію-валідатор для адрес електронної пошти. 
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку 
// яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до 
// регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let validateEmail = (email) => {
    email = email.split('@')
    if (email.length !== 2) {
        console.log('incorrect email')
    } else {
        let checkLength = email[0].length
        email[0] = email[0].replace(/\s+/g, '')
        if (email[0].length !== checkLength || email[0].length === 0) {
            console.log('incorrect email')
        } else {
            let domain = email[1].split('')
            for (let i = 0; i < domain.length; i++) {
                if (domain[0] === '.') {
                    console.log('incorrect email')
                } else {
                    console.log('correct email')
                }
            }
        }
    }
}

// validateEmail('someemail@gmail.com')

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". 
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// - є масивlet 
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let sortArray = (array) => (array.sort((a, b) => b.modules.length - a.modules.length))

console.log(sortArray(coursesArray))

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (str, stringsearch) => {
    str = str.split('')
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringsearch) {
            sum++
        }
    }
    return sum
}

// let symb = "о", str = "Астрономия это наука о небесных объектах"
// console.log(count(str, symb))

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutString = (str, n) => {
    str = str.split(' ')
    for (let i = n; i < str.length; i++) {
        delete str[i]
    }
    return str.join(' ')
}

let str = "Сила тяжести приложена к центру масс тела";
console.log(cutString(str, 5))