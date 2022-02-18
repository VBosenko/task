// - Дано натуральное число n. Выведите все числа от 1 до n.


let arrayTo = (n) => {
    let i = 1
    let f = () => {
        console.log(i)
        if (i < n) {
            f(++i)
        }
        return
    }
    f()
}

arrayTo(3)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, 
//   если A < B, или в порядке убывания в противном случае.

let numberAb = (a, b) => {
    if (a > b) {
        let f = () => {
            console.log(a)
            if (a > b) {
                f(--a)
            }
            return
        }
        f()
    } else if (a < b) {
        let f = () => {
            console.log(a)
            if (a < b) {
                f(++a)
            }
            return
        }
        f()
    } else {
        console.log(a)
    }
}

numberAb(5, 10)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let foo = (array, i) => {
    if (i > array.length) {
        console.log('you have very big i');
        return
    }
    let first = array[i]
    let second = array[i + 1]
    array[i] = second
    array[i + 1] = first
    return array
}

console.log(foo([9, 8, 0, 4], 2))

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let funk = (array) => {
    for (let i = 0; i < array.length; i++) {
        let varFirst = array[i]
        let varSecond = array[i + 1]
        if (array[i] === 0 && array[i + 1] !== undefined) {
            array[i] = varSecond
            array[i + 1] = varFirst
        }
        funk()
    }
}

let arrFoo = (array) => {
    for (let i = 0; i < array.length; i++) {
        let varFirst = array[i]
        let varSecond = array[i + 1]
        if (array[i] === 0 && array[i + 1] !== undefined) {
            array[i] = varSecond
            array[i + 1] = varFirst
        }
        arrFoo()
        // for (let i = 0; i < array.length; i++) {
        //     let varFirst = array[i]
        //     let varSecond = array[i + 1]
        //     if (array[i] === 0 && array[i + 1] !== undefined) {
        //         array[i] = varSecond
        //         array[i + 1] = varFirst
        //     }
        // }
    }
    return array
}

console.log(arrFoo([0, 0, 1, 0]))
