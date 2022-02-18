// - Створити функцію конструктор для об'єктів User з полями id, name, 
//surname , email, phone

function User(id, userName, surname, email, phone) {
    this.id = id;
    this.userName = userName;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [
    new User("1", "Oleh", "Starodub", "OlehStarodub@gmail.com", "0687438711"),
    new User("2", "Artur", "Starodub", "AreutStarodub@gmail.com", "0687438712"),
    new User("3", "Anton", "Starodub", "AntonStarodub@gmail.com", "0687438713"),
    new User("4", "Bohdan", "Starodub", "BohdanStarodub@gmail.com", "0687438714"),
    new User("5", "Shasha", "Starodub", "ShashaStarodub@gmail.com", "0687438715"),
    new User("6", "Petya", "Starodub", "PetyaStarodub@gmail.com", "0687438716"),
    new User("7", "Kolya", "Starodub", "KolyaStarodub@gmail.com", "0687438717"),
    new User("8", "Igor", "Starodub", "IgorStarodub@gmail.com", "0687438718"),
    new User("9", "Vadim", "Starodub", "VadimStarodub@gmail.com", "0687438719"),
    new User("10", "John", "Starodub", "JohnStarodub@gmail.com", "0687438710")
]


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
//залишивши тільки об'єкти з парними id (filter)

evenId = users.filter(odd => odd.id % 2 === 0)

console.log(evenId)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по
//id. по зростанню (sort)

sortIdGrow = users.sort((a, b) => a.id - b.id)

console.log(sortIdGrow)

// - створити класс для об'єктів Client з полями id, name, surname , email,
// phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, userName, surname, email, phone, order) {
        this.id = id;
        this.userName = userName;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let emptyArray = [
    new Client(3, 'Liga', 'Giga', 'sg@gmail.com', 30680000001, ['book', 'game', 'ps4']),
    new Client(1, 'Smeha', 'Rony', 'oli@gmail.com', 30680000002, ['magasine', 'shop', 'ps3']),
    new Client(2, 'Zipko', 'Tevez', 'zeru@gmail.com', 30680000003, ['football', 'ps5']),
    new Client(4, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']),
];
console.log(emptyArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

emptyArray = emptyArray.sort((a, b) => a.order.lenngth - b.order.lenngth)