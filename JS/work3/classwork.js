// Зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let newArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

// 1. перебрати його циклом while

let i = 0
while (i<newArray.length) {
    i++
}

// 2. перебрати його циклом for

for (let j = 0; j < newArray.length; j++) {

}

// 3. перебрати циклом while та вивести числа тільки з непарним індексом

let k = 0
while (k<newArray.length) {
    if (k % 2 !== 0) {
        console.log(newArray[k])
    }
    k++
}

// 4. перебрати циклом for та вивести числа тільки з непарним індексом

for (let a = 0; a < newArray.length; a++) {
    if (a % 2 !== 0) {
        console.log(newArray[a])
    }
}

// 5. перебрати циклом while та вивести числа тільки парні значення

let b = 0
while (b<newArray.length) {
    if (newArray[b] % 2 === 0) {
        console.log(newArray[b])
    }
    b++
}

// 6. перебрати циклом for та вивести числа тільки парні значення

for (let c = 0; c < newArray.length; c++) {
    if (newArray[c] % 2 === 0) {
        console.log(newArray[c])
    }
}


// 7. замінити кожне число кратне 3 на слово "okten"

for (let d = 0; d < newArray.length; d++) {
     if (newArray[d] % 3 === 0) {
         newArray[d] = "okten"
     }
 }

// 8. вивести масив в зворотному порядку.

for (let e = newArray.length - 1; e >= 0; e--) {
    console.log(newArray[e])
}

// 9. всі попередні завдання (окрім 8), але в зворотному циклі (с заду на перед)

let ii = newArray.length - 1
while (ii >= 0) {
    ii--
}

for (let jj= newArray.length - 1; jj >= 0; jj--) {

}

let iii = newArray.length - 1
while (iii >= 0) {
    if (newArray[iii] % 2 !== 0) {
        console.log(newArray[iii])
    }
    iii--
}

for (let y = newArray.length - 1; y >= 0; y--) {
    if (newArray[y] % 2 !== 0) {
        console.log(newArray[y])
    }
}

let t = newArray.length - 1
while (t >= 0) {
    if (newArray[t] % 2 === 0) {
        console.log(newArray[t])
    }
    t--
}

for (let x = newArray.length - 1; x >= 0; x--) {
    if (newArray[x] % 2 === 0) {
        console.log(newArray[x])
    }
}

for (let g = newArray.length - 1; g >= 0; g--) {
    if (newArray[g] % 3 === 0) {
        newArray[g] = "okten"
    }
}
