// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function inputFunction(...numbers) {
    if (numbers.length === 1) {
        console.log(numbers)
    } else if (numbers.length === 2) {
        console.log(numbers[0] + numbers[1])
    } else {
    }
}


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function returtArray(array1, array2) {
    let arrayNew =[]
    for (let i = 0; i < array1.length; i++) {
        for (let f = 0; f < array2.length; f++) {
            if (i === j) {
                arrayNew[i] = array1[i] + array2[j]
            }
        }
    }
    return arrayNew
}

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function objectKeys (...array) {
    let arrayKeys = []
    let iteration = 0
    for (let i = 0; i < array.length; i++) {
        for (let keys in array[i]) { 
            arrayKeys[iteration] = [keys]
        iteration++
        }
    }
    return arrayKeys
}



// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function objecs(...array) {
	let arrayKeys = []
	let iteration = 0
	for (let i = 0; i < array.length; i++) {
		for (let keys in array[i]) {
			arrayKeys[iteration] = array[i][keys]
			iteration++
		}
	}
	return arrayKeys
}

