// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

console.log(document.getElementById('content').textContent)

// -- отримує текст з блоку з id "rules"

console.log(document.getElementById('rules').textContent)

// -- замініть текст параграфа з id 'content' на будь-який інший

let changeText = document.getElementById('content')
changeText.innerText = 'Another text'

// -- замініть текст параграфа з id 'rules' на будь-який інший

changeText = document.getElementById('rules')
changeText.innerText = 'Another text'

// -- змініть кожному елементу колір фону на червоний

let changeBackground = document.body.children

for (let changeBackgroundElement of changeBackground) {
    changeBackgroundElement.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій

let changeColor = document.body.children

for (let changeColorElement of changeColor) {
    changeColorElement.style.color = 'blue'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(document.getElementById('rules').classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fc_rulesChange = document.getElementsByClassName('fc_rules');
for (let fcRulesChangeElement of fc_rulesChange) {
    fcRulesChangeElement.style.color = 'red'
}