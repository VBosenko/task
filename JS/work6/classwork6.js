// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let normalizeName = (string) => string = string.replace(/[\s._-]/g, " ").replace(/ +/g, ' ').trim()

console.log(normalizeName('Harry..Potter'))
console.log(normalizeName('Ron---Whisley'))
console.log(normalizeName('Hermione__Granger'))

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomArray = (string) => {
    string = []
    for (let i = 0; i < 10; i++) {
        string[i] = Math.floor(Math.random() * 100)
    }
    return string
}

let sortArray = randomArray()

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

console.log(sortArray.sort((a, b) => a - b))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let filterArray = randomArray()

console.log(filterArray.filter(number => number % 2 === 0))

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let mapArray = randomArray()

console.log(mapArray.map(number => `${number}`))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (nums, direction) => {
    if (direction = 'ascending') {
        nums = nums.sort((a, b) => a - b)
        return nums
    } else if (direction = 'descending') {
        nums = nums.sort((a, b) => b - a)
        return nums
    } else {
        return 0
    }
}

console.log(sortNums([11, 21, 3], 'ascending'))


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(num => num.monthDuration > 5))