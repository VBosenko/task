// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

document.getElementById('main_header').classList.add('GroupName')

// b) робить шириниу елементу ul 400px

let newWidthLinkList = document.getElementsByTagName('ul')

console.log(newWidthLinkList);

newWidthLinkList[0].style.width = '400px'

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let newWidthClass = document.getElementsByClassName('linkList')

console.log(newWidthClass);

for (const newWidthClass1 of newWidthClass) {
    newWidthClass1.style.width = '50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2

console.log(document.getElementsByClassName('listElement2')[0].innerText)

// e) отримує всі елементи li та змінює ім колір фону на сірий

let changeColorByTag = document.getElementsByTagName('li')

for (let changeColorByTagElement of changeColorByTag) {
    changeColorByTagElement.style.color = 'gray'
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let addClass = document.getElementsByTagName('a')
for (let addClass1 of addClass) {
    addClass1.classList.add('anchor')
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let chnageHightText = document.getElementsByTagName('a')

for (let chnageHightTextElement of chnageHightText) {
    if (chnageHightTextElement.innerText === 'link3') {
        chnageHightTextElement.style.fontsize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let addClassToA = document.getElementsByTagName('a')

for (let addClassToAElement of addClassToA) {
    let item = addClassToAElement.innerText
    addClassToAElement.classList.add(`element_${item}`)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let changeColorSub = document.getElementsByClassName('sub-header')

let colorToChange = prompt('Write color:')

for (let changeColorSubElement of changeColorSub) {
    changeColorSubElement.style.backgroundColor = `${changeColorSubElement}`
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let colorToChanges = prompt('Write color:')


for (const colorToChangeElements of changeColorSub) {
    if (colorToChangeElements.innerText === 'content 2 segment') {
        colorToChangeElements.style.color = `${colorToChanges}`
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let changeTextInClass = document.getElementsByClassName('content_1')

let changeTextInClassText = prompt('Text')

changeTextInClass[0].innerText = `${changeTextInClassText}`

// l) отримати елементи p та змінити їм padding на 20px

let changeP = document.getElementsByTagName('p')

for (let changePElement of changeP) {
    changePElement.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let chaText = document.getElementsByClassName('text2')

for (let chaTextElement of chaText) {
    chaTextElement.innerHTML = 'dec-2021'
}
