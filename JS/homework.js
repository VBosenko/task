// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");

// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
let one = 1;
let ten = 10;
let nine = -999;
let onetwothree = 123;
let PI = 3.14;
let e = 2.7;
let sixteen = 16;
let rue = true;
let alse = false;

//   Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(one);
console.log(ten);
console.log(nine);
console.log(onetwothree);
console.log(PI);
console.log(e);
console.log(sixteen);
console.log(rue);
console.log(alse);

alert(str1);
alert(str2);
alert(str3);
alert(str4);
alert(one);
alert(ten);
alert(nine);
alert(onetwothree);
alert(PI);
alert(e);
alert(sixteen);
alert(rue);
alert(alse);

document.write(str1);
document.write(str2);
document.write(str3);
document.write(str4);
document.write(one);
document.write(ten);
document.write(nine);
document.write(onetwothree);
document.write(PI);
document.write(e);
document.write(sixteen);
document.write(rue);
document.write(alse);




// - Переприсвоїти кожній змінній з завдання значення на довільне.

str1 = 'hello1';
str2 = 'owu1';
str3 = 'com1';
str4 = 'ua1';
one = 11;
ten = 101;
nine = -9991;
onetwothree = 1231;
PI = 3.141;
e = 2.71;
sixteen = 161;
rue = false;
alse = true;

//   Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(one);
console.log(ten);
console.log(nine);
console.log(onetwothree);
console.log(PI);
console.log(e);
console.log(sixteen);
console.log(rue);
console.log(alse);

alert(str1);
alert(str2);
alert(str3);
alert(str4);
alert(one);
alert(ten);
alert(nine);
alert(onetwothree);
alert(PI);
alert(e);
alert(sixteen);
alert(rue);
alert(alse);

document.write(str1);
document.write(str2);
document.write(str3);
document.write(str4);
document.write(one);
document.write(ten);
document.write(nine);
document.write(onetwothree);
document.write(PI);
document.write(e);
document.write(sixteen);
document.write(rue);
document.write(alse);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Vasyl';
let middleName = 'V';
let lastName = 'Bosenko';

let person = `${firstName} ${middleName} ${lastName}`;

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

let firstNamePrompt = prompt('First name?', '');
let midleNamePrompt = prompt('Middle name?', '');
let agePrompt = prompt('Age?', '');

//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

alert('Вітаю ', firstNamePrompt, midleNamePrompt, '. Тобі ', agePrompt, ' років.');

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100; let b = '100'; let c = true;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//   5 < 6 -> true
//   5 > 6 -> false
//   5 = 6 -> false
//   5 <= 6 -> false
//   10 == 10 -> true
//   10 === 10 -> true
//   10 >= 10 -> false
//   10 != 10 -> false
//   10 <= 10 -> false
//   123 === '123' -> false
//   123 == '123' -> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>"); 
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");

205
15
40
10