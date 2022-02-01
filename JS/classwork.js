// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let a = [
    1, 
    2, 
    3, 
    4, 
    5, 
    6,
    7,
    8,
    9,
    10, 
]
let result = a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9] ;

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book1 = {
    title: 'Abetka',
    number: 36,
    genre: 'Baby'
};

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book2 = {
    title: 'Abetka',
    number: 36,
    genre: 'Baby',
    authors: 
    {
        first: 'Harry', 
        second: 'Jhon', 
        last: 'Arthur'
    }
};

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books = [
    {
        title: 'Amsterdam',
        number: 192,
        genre: 'Novel',
        authors: 'Ian McEwan'
    },
    {
        title: 'Hyperion',
        number: 482,
        genre: 'Space opera',
        authors: 'Dan Simmons'
    },
    {
        title: 'Witiko',
        number: 304,
        genre: 'Historical novel',
        authors: 'Adalbert Stifter'  
    }
];

console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.

let height = 23;
let width = 10;

let s = height * width;


// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.

let heightC = 10;
let dC = 4;

let v = heightC * dC * dC * 3.14 / 4;

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4; 

let k = Math.pow((n * n + m * m), 0.5);
