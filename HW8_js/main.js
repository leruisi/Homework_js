// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function Users(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new Users(1, "Anderw", "Morenko", "jgjtjg@.com", "1234567890"),
    new Users(2, "Lesha", "Krivilev", "rrr444.com", "9876543210"),
    new Users(3, "Maryan", "Retno", "bnhgy.com", "5555555555"),
    new Users(4, "Alesya", "Tre", "gtgyhuj.com", "1111111111"),
    new Users(5, "Lera", "Yur", "aqswse.com", "9999999999")
];


users.map(function(users) {
    console.log("ID:", users.id);
    console.log("Name:", users.name);
    console.log("Surname:", users.surname);
    console.log("Email:", users.email);
    console.log("Phone:", users.phone);

});

// створити пустий масив, наповнити його 10 об'єктами new User(....)
function Usertwo(id, name, age, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userss = [];

for (let i = 1; i <= 10; i++) {
    userss.push(new Usertwo(i, "User" + i,  18+ i, "Surname" + i, "user" + i + "@example.com", "123456789" + i));
}

console.log(userss);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsers = userss.filter(function(user) {
    return user.id % 2 === 0;
});

console.log(filterUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по убыванию (sort)
userss.sort(function(a, b) {
    return b.id - a.id;
});

console.log(userss);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [
    new Client(1, "Andry", "Mor", "hjyihiy@example.com", "1234567890", ["Product 1", "Product 2"]),
    new Client(2, "lesha", "Krivilev", "fkfdkfk@example.com", "7567646745", ["Product 3", "Product 4"]),
    new Client(3, "maryan", "Yurst", "gjkgjgj@example.com", "6896895689", ["Product 5"]),
    new Client(4, "lesya", "Krivileva", "fghfjghfj@example.com", "343434343", ["Product 6"]),
    new Client(5, "Lera", "Yurisrmor", "rifgrghruhg@example.com", "9999999999", ["Product 7", "Product 8"])
];

clients.map(function(client) {
    console.log("ID:", client.id);
    console.log("Name:", client.name);
    console.log("Surname:", client.surname);
    console.log("Email:", client.email);
    console.log("Phone:", client.phone);
    console.log("Order:", client.order);
});

// створити пустий масив, наповнити його 10 об'єктами Client
class ClientThree {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientss = [];

// Заполнение массива clients объектами Client
for (let i = 1; i <= 10; i++) {
    clientss.push(new ClientThree(i, "Client" + i, "Surname" + i, "client" + i + "@example.com", "123456789" + i, ["Product" + i]));
}

console.log(clientss);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clientss.sort(function(a, b) {
    return a.order.length - b.order.length;
});

console.log(clientss);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella("Girl1", 21, 35),
    new Cinderella("Girl2", 22, 36),
    new Cinderella("Girl3", 23, 37),
    new Cinderella("Girl4", 24, 38),
    new Cinderella("Girl5", 25, 39),
    new Cinderella("Girl6", 26, 40),

];
class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let prince = new Prince("Prince Charming", 29, 39);

let cinderellaAndPrince = cinderellas.find(function(cinderella) {
    return cinderella.footSize === prince.foundShoe;
});

console.log("Cinderella:", cinderellaAndPrince);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function() {
        for (let key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}

let car1 = new Car("Q8", "Audi", 2022, 250, 2.5);
car1.drive();

car1.info();

car1.increaseMaxSpeed(40);
console.log(car1.maxSpeed);

car1.changeYear(2023);
console.log(car1.year);

let driver = {
    name: "Andrew",
    age: 21,
    license: "B"
};

car1.addDriver(driver);
console.log(car1.driver);



class Cars {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }
}
let car2 = new Cars("Q8", "Audi", 2022, 280, 2.5);

console.log(car2.maxSpeed);
car2.increaseMaxSpeed(20);
console.log(car2.maxSpeed);

console.log(car2.year);
car2.changeYear(2023);
console.log(car2.year);
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
class User {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

class Address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class Company {
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

const user = new User(
    1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    new Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', new Geo('-37.3159', '81.1496')),
    '1-770-736-8031 x56442',
    'hildegard.org',
    new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')
);

console.log(user);
const userTwo = new User(
    2,
    'Lera',
    'Yurist',
    'dsfdfdsf@gmail.com',
    new Address('foifiifgi', 'ind', 'Dnipro', '49000', new Geo('-37.3159', '81.1496')),
    '345676544',
    'lera.com',
    new Company('okten', 'frgtgththth', 'tgtgtgtgtgt')
);

console.log(userTwo);
