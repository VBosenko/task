
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }


// class NewUsers {
//     constructor(id, name, username, email, street, suite, city, zipcode, geo, phone, website, company) {
//         this.id = id
//         this.name = name
//         this.username = username
//         this.email = email
//         this.address = { street, suite, city, zipcode, geo}
//         this.phone = phone
//         this.website = website
//         this.company = company
//     }
//     set () {
//         this.company = { mane, catchPhrase, bs }
//         this.geo = lat.add
//     }
// }
// // 1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'
// let newUser = new NewUsers()

// console.log(newUser)


//address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }


class Geo {
    constructor(lat, lng) {
        this.geo = { lat, lng }
    }
}

class Address {
    constructor(street, suite, city, zipcode, lat, lng) {
        this.street = street
        this.suite = suite
        this.city = city
        this.zipcode = zipcode
        this.geo = new Geo(lat, lng)

    }
}

class Company {
    constructor(name, catchPhrase, bs) {
        this.name = name
        this.catchPhrase = catchPhrase
        this.bs = bs
    }
}

class newUser {
    constructor(id, name, username, email, street, suite, city, zipcode, phone, website, name1, catchPhrase, bs) {
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.address = new Address(street, suite, city, zipcode, lat, lng)
        this.phone = phone
        this.website = website
        this.company = new Company(name1, catchPhrase, bs)



    }
}





// 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'

let newUsera = new newUser(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')

console.log(newUsera)
