/*let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas * 2, ageSarah / 10, 2 ** 3)
const firstname = 'Jonas';
const lastname = 'Shmidtman';
console.log(firstname + ' ' + lastname);

// Assignment Operator

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4= 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, <=, >=,
console.log(ageSarah >= 18);
if (ageJonas > ageSarah) {
    console.log('Jonas is older than Sarah');
}


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/
/*
const firstname = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = '2037';
const Jonas = "I'm " + firstname + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(Jonas);

const jonasNew = `I'm ${firstname}, a ${year - birthYear} year old ${job} !`
console.log(jonasNew);
console.log(`Just a regular String`);

console.log(`String with \n\
multiple \n\
lines`);

*/


/*const massMark = 132;
const heightMark = 1.95;

const massJohn = 132;
const heightJonh = 1.95;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJonh * heightJonh);
const result = bmiMark == bmiJohn;



if (result) {
    console.log(`Mark's BMI (${bmiMark}) is the same as John's (${bmiJohn})!`);
}

else  {
    console.log(`John's BMI (${bmiJohn}) is not the same as Mark's (${bmiMark})!`) ;
}
*/

/*
const d1 = 97;
const d2 = 112;
const d3 = 101;

const k1 = 109;
const k2 = 95;
const k3 = 123;

const daverage = (d1 + d2 + d3) / 3;
const kaverage = (k1 + k2 + k3) / 3;

console.log(daverage, kaverage);

if (kaverage > 100 && kaverage > daverage) {
    console.log('koala is a winner');
}

if (daverage > 100 && daverage > kaverage) {
    console.log('doplphin is winner');
}

if (kaverage > 100 && daverage == kaverage) {
    console.log('doplphin is equal to koala');
}

if (kaverage < 100 && daverage < 100) {
    console.log('NO WINNER');
}
*/
/*
const bill1 = 275;
const bill2 = 430;
const bill3 = 40;

const tip1Value = bill1 * 0.15;
const tip2Value = bill2 * 0.2;
const tip3Value = bill3 * 0.15;
const result = tip1Value == tip2Value == tip3Value;

{
    console.log(`bill1(${tip1Value}) bill2(${tip2Value}) bill3(${tip3Value})`);
}
*/


/*
// type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion

console.log('I am ' + 23 + ' Years old');
console.log('23' - '10' - 3);


let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/*
const money = 20;

if (money !== 0) {
    console.log("Don't spend it all! ;)");
} else {
    console.log('You should get a job ;)');
}
*/

/*
const age = 18;
if (age === 18) console.log('You are an adult');

if (age == 18) console.log('You are an adult and super');

*/

/*
const answer = prompt("What's your favourite number?");

const favourite = Number(answer);
console.log(favourite);
console.log(typeof favourite);


if (favourite === 23) {
    console.log('The 23 number is Amazing!')
} else if (favourite === 7) {
    console.log('The number is not 23 but 7!')
} else if (favourite === 9) {
    console.log('The number is 9 and it is not bad!')
}
if (favourite !== 22) console.log('Why not 22!');

*/



/*

const haveadriverslicense = true; //A
const hasgoodvision = false;  //B

console.log(haveadriverslicense && hasgoodvision);
console.log(haveadriverslicense || hasgoodvision);
console.log(!haveadriverslicense);



if (haveadriverslicense && hasgoodvision) {
    console.log('Sarah should drive');
} else {
    console.log('Sarah should NOT drive!');
}


const SarahisgoodDriver = true;
const JohnisgoodDriver = false;
const botharegoodDrivers = false;

console.log(SarahisgoodDriver && JohnisgoodDriver || botharegoodDrivers);
console.log(SarahisgoodDriver || JohnisgoodDriver);
console.log(!SarahisgoodDriver);

const shouldDrive = SarahisgoodDriver && JohnisgoodDriver;
if (shouldDrive) {
    console.log('Both can drive')
} else {
    console.log('Both cannot drive!');
}
*/


/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No one wins the trophy');
}
*/


/*
const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/

/*
'use strict';

let hasdriverslicense = false;
const passTest = true;

if (passTest) hasdriverslicense = true;
if (hasdriverslicense) console.log('I can drive')

//const interface = 'Audio';
const private = 534;
*/

/*
function logger() {
    console.log('My name is Jonas');
}

logger();
logger();
logger();
*/

/*
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/



/*
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
function calcAge2(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);


const age2 = calcAge2(1992);
console.log(age2);
*/


/*
// ArrowFunction
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntileretirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement} years`;
}

console.log(yearsUntileretirement(1991, 'Jonas'));
console.log(yearsUntileretirement(1980, 'Bob'));
*/


/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apple, oranges) {
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(oranges);


    const juice = `Juice with ${applePieces} pices of apple  and ${orangePieces} piceces in orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
function calculation(x, y) {
    return x - y;
}

function calculation2(x, y) {
    const numb1 = x * 2 + y;
    return numb1;
}

console.log(calculation2(2, 2));

let result2;
result2 = calculation2(105, 220);
console.log(result2)


console.log(calculation2(3, 3));



const calculation3 = (x, y) => x - y;

*/

/*
const calcAverage = (a, b, c) => {
    return (a + b + c) / 3;
};
console.log(calcAverage(3, 4, 5));


const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);


const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win the Trophy (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win the Trophy (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`No team wins..`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas3 = calcAverage(23, 34, 27);
console.log(scoreDolphins2, scoreKoalas3);
checkWinner(scoreDolphins2, scoreKoalas3);

*/


// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);



// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 2
// }

// const bills = [125, 555, 55];
// const tips = [calcTip(bills[0]), calcTip(bills[1], calcTip(bills[2]))];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);



/*
const Jonas = {
    lastname: 'Schmedmen',
    job: 'teacher',
    age: 2037 - 1991
};
console.log(Jonas);

console.log(Jonas.lastname);
console.log(Jonas['lastname']);
*/


// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const total = [];
// const calcAverage = function (arr) {
//     let sum = 0;
//     arr.forEach((ar) => {
//         sum = sum + ar;
//     });
//     const finalResult = sum / arr.length;
//     return finalResult;
// }



// const finalResult = calcAverage(bills);
// console.log(finalResult);


// const calcTip = function (bill, tip, tip2) {
//     return bill + tip + tip2;
// };

// bills.forEach((bill) => {
//     const result = calcTip(bill, 1, 2);
//     total.push(result);
// });

// console.log(total);



// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const total = [];

// const calcAverage = (arr) => {
//     let sum = 0;
//     arr.forEach((ar) => {
//         sum = sum + ar;
//     });
//     const finalResult = sum / arr.length;
//     return finalResult;
// }



// const finalResult = calcAverage(bills);
// console.log(finalResult);


// const calcTip = function (bill, tip, tip2) {
//     return bill + tip + tip2;
// };

// bills.forEach((bill) => {
//     const result = calcTip(bill, 1, 2);
//     total.push(result);
// });

// console.log(total);






// const bills = [2, 3, 5];
// const total = [];

// const calcAverage = function (arr) {
//     let sum = 0;
//     arr.forEahc((ar) => {
//         sum = sum + ar;
//     });
//     const finalResult = sum / arr.length;
//     return finalResult;
// }

// const calcTip = function (bill, tip, tip2) {
//     return bill + tip + tip2;
// };

// bills.forEach((bill) => {
//     const result = calcTip(bill, 1, 2);
//     total.push(result);
// });

// console.log(total);



// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const total = [];
// const calcAverage = function (arr) {
//     let sum = 0;
//     arr.forEach((ar) => {
//         sum = sum + ar;
//     });
//     const finalResult = sum / arr.length;
//     return finalResult;
// }



// const finalResult = calcAverage(bills);
// console.log(finalResult);


// const calcTip = function (bill, tip, tip2) {
//     return bill + tip + tip2;
// };

// bills.forEach((bill) => {
//     const result = calcTip(bill, 1, 2);
//     total.push(result);
// });

// console.log(total);







// const convertTemperature = (temperature, scale) => {
//     if (temperature <= 1) {
//         throw new Error(`Temperature is less or equal than 1`);
//     }
//     if (scale === 'C') {
//         return temperature * 9 / 5 + 32;
//     }
//     if (scale === 'F') {
//         return (temperature - 32) * 5 / 9;
//     }
//     throw new Error(`Scale is invalid`);
// };


// const convertedTemp1 = convertTemperature(32, "C");
// console.log(`32 градуса Цельсия равны ${convertedTemp1} градусам Фаренгейт`);

// const convertedTemp2 = convertTemperature(100, "F");
// console.log(`100 градусов Фаренгейт равны ${convertedTemp2} градусам цельсия`);





// function isPrime(n) {
//     if (n <= 1) {
//         return false;
//     }

//     if (n <= 3) {
//         return true;
//     }
//       модульное деление
//     // (if (13 % 2 === 0 (1 == 0))
//     for (let i = 2; i < n; i += 1) {
//         if (n % i === 0) {
//             return false;
//         }

//     }

//     return true;
// }


// const number = 13;
// if (isPrime(number)) {
//     console.log(number + " является простым числом.");
// } else {
//     console.log(number + " не является простым числом.");
// }


// const jonas = {
//     firstname: `Jonas`,
//     lastname: `Shmidtman`,
//     birthYear: 1991,
//     friends: [`Michael`, `Peter`, `Steven`],

//     calcAge: function (birthYear) {
//         return 2037 - birthYear;
//     }
// };

//     // console.log(jonas.calcAge(1991));




//     calcAge: function () {
//         console.log(this);
//         return 2037 - this.birthYear;
//     }
// };

// console.log(jonas.calcAge());

// jonas.firstname;
// console.log(jonas.firstname);

// for (let i = 0; i <= 10; i = i + 1) {
//     console.log(i);
// }

// const numbers = [30, 60, 80];
// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     sum = sum + numbers[i];
// }

// const average = sum / numbers.length;
// console.log(average);





// const students = [];

// const student1 = {
//     id: "a",
//     name: "john",
//     grades: [5, 6, 10, 6]
// };
// const student2 = {
//     id: "b",
//     name: "bill",
//     grades: [5, 7, 9]
// };
// const student3 = {
//     id: "c",
//     name: "karl",
//     grades: [6, 6, 8]
// };

// students.push(student1);
// students.push(student2);
// students.push(student3);


// const averageGrade = function (student) {
//     let sum = 0;
//     for (let i = 0; i < student.grades.length; i += 1) {
//         sum = sum + student.grades[i];
//     }

//     const average = sum / student.grades.length;
//     return average;
// }

// for (let i = 0; i < students.length; i += 1) {
//     const result = averageGrade(students[i]);
//     console.log(result);
// }


// console.log(students);


// const result = averageGrade(student);
// console.log(result);

// console.log(students);














// const numbers = [30, 60, 80];
// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     sum = sum + numbers[i];
// }

// const average = sum / numbers.length;
// console.log(average);






// const numbers = [1, -2, 3, -4, 5, -6];

// const positivenumb = function (numbers) {
//     let sum = 1;
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > 0) {
//             sum = sum * numbers[i];
//         }
//     }
// }
// const result = positivenumb;
// console.log(result);










// const numbers = [-1, 2, -3, 4];


// let positive = 1;
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > 0) {
//         positive = positive * numbers[i];
//     }
// }

// const average = positive;
// console.log(average);

// let negative = 1;
// for (let a = 0; a < numbers.length; a += 1) {
//     if (numbers[a] < 0) {
//         negative = negative * numbers[a];
//     }
// }

// const average2 = negative;
// console.log(average2)


// const numbers = [1, -2, 3, -4, 5];

// function isPositive(number) {
//     return number > 0;
// }

// function isNegative(number) {
//     return number < 0;
// }

// function runCalculation(numbers, predicate) {
//     let result = 1;
//     for (let i = 0; i < numbers.length; i++) {
//         if (predicate(numbers[i])) {
//             result *= numbers[i];
//         }
//     }
//     return result;
// }

// const result1 = runCalculation(numbers, isPositive);
// console.log(result1); // 15

// const result2 = runCalculation(numbers, isNegative);
// console.log(result2); // 8




// const addressBook = [];

// // Функция addContact добавляет контакт в адресную книгу.
// function addContact(contact) {
//     addressBook.push(contact);
// }

// // Функция listContacts выводит список контактов из адресной книги.
// function listContacts() {
//     for (const contact of addressBook) {
//         console.log("Name:", contact.name);
//         console.log("Email:", contact.email);
//         console.log("Phone:", contact.phone);
//         console.log("Address:");
//         console.log("  Street:", contact.address.street);
//         console.log("  City:", contact.address.city);
//         console.log("  Zip:", contact.address.zip);
//         console.log("---------------------");
//     }
// }

// // Пример использования addContact для добавления контакта в адресную книгу.
// addContact({
//     name: "Имя Контакта",
//     email: "example@example.com",
//     phone: "123-456-7890",
//     address: {
//         street: "Улица Контакта",
//         city: "Город Контакта",
//         zip: "12345"
//     }
// });

// // Пример использования listContacts для вывода списка контактов.
// listContacts();




// const bookings = [];

// const createBooking = function (flightNumb, numPassengers = 2, price = 200) {

//     const booking = {
//         flightNumb,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123', 5, 800);
// createBooking('LH555', 7, 13000);



// const flight = 'LH124';
// const jonas = {
//     name: 'Jonas',
//     passport: 12345

// }

// const checkInn = function (flightNum, passenger) {
//     flightNum = 'LH124';
//     passenger.name = 'Mr.' + passenger.name;

//     if (passenger.passport === 12345) {
//         alert('CheckInn')
//     } else {
//         alert('Wrong passport!');
//     }
// };

// checkInn(flight, 'jonas');
// console.log(flight);
// console.log(jonas);


// const flightNum = flight;
// const passenger = jonas;








// const taskManager = {

//     tasks: [],

//     id: 123,
//     title: 'Buy Milk',
//     desription: 'get Milk from store',
//     status: 'done',


//     addTask: function (title, description) {
//         const task = {
//             id: this.generateUniqueId(),
//             title: title,
//             description: description,
//             status: 'В работе',
//         };
//         this.tasks.push(task);

//     }
// };




// const hi = Math.random().toString().substring(5, 8);
// console.log(hi);
// //счетчик по ID, начинается с 1 и увеличивается каждый раз когда я вызываю addtask.
// const taskManager = {
//     tasks: [],

//     // Метод для добавления задачи
//     addTask: function (title, description) {
//         const task = {
//             id: this.generateUniqueId(),
//             title: title,
//             description: description,
//             status: 'В работе',
//         };
//         this.tasks.push(task);
//     },

//     // Метод для генерации уникального идентификатора
//     generateUniqueId: function () {
//         return '_' + Math.random().toString(36).substr(2, 9);
//     },

//     // Метод для изменения статуса задачи по её ID
//     changeTaskStatus: function (taskId, newStatus) {
//         const task = this.tasks.find(task => task.id === taskId);
//         if (task) {
//             task.status = newStatus;
//         }
//     },

//     // Метод для удаления задачи по её ID
//     deleteTask: function (taskId) {
//         this.tasks = this.tasks.filter(task => task.id !== taskId); // цикл который находит task, которую я хочу удалить. удалить task (this.tasks.splice(foundTask, 1);)
//     },

//     // Метод для вывода всех задач
//     listTasks: function () {
//         return this.tasks; // (проход по каждой tasks и вовыд ее на экран (For цикл))
//     },
// };

// // Пример использования
// taskManager.addTask('Задача 1', 'Описание задачи 1');
// taskManager.addTask('Задача 2', 'Описание задачи 2');

// console.log('Список задач:');
// console.log(taskManager.listTasks());

// const taskId = taskManager.tasks[0].id;
// taskManager.changeTaskStatus(taskId, 'Завершено');
// console.log('Изменённый статус первой задачи:');
// console.log(taskManager.listTasks());

// taskManager.deleteTask(taskId);
// console.log('Удалена первая задача:');
// console.log(taskManager.listTasks());




// const flight = 'AB123';
// const jonas = {
//     name: 'Jonas',
//     passport: 12345

// }

// const checkInn = function (flightNum, passenger) {

//     passenger.name = 'Mr.' + passenger.name;

//     if (passenger.passport === 12345) {
//         alert(`CheckInn ${flightNum}`);
//     } else {
//         alert('Wrong passport!');
//     }
// };

// checkInn(flight, jonas);
// console.log(flight);
// console.log(jonas);


// const flightNum = flight;
// const passenger = jonas;





// const taskManager = {
//     tasks: [],

//     addTask: function (title, description) {
//         const task = {
//             id: this.generateUniqueId(),
//             title: title,
//             description: description,
//             status: 'В работе',
//         };
//         this.tasks.push(task);
//     },


//     // generateUniqueId: function () {
//     //     return '_' + Math.random().toString(36).substr(2, 9);
//     // },


//     changeTaskStatus: function (taskId, newStatus) {
//         const task = this.tasks.find(task => task.id === taskId);
//         if (task) {
//             task.status = newStatus;
//         }
//     },


//     deleteTask: function (taskId) {
//         this.tasks = this.tasks.filter(task => task.id !== taskId);
//     },


//     listTasks: function () {
//         return this.tasks;
//     },
// };

// taskManager.addTask('Задача 1', 'Описание задачи 1');
// taskManager.addTask('Задача 2', 'Описание задачи 2');

// console.log('Список задач:');
// console.log(taskManager.listTasks());

// const taskId = taskManager.tasks[0].id;
// taskManager.changeTaskStatus(taskId, 'Завершено');
// console.log('Изменённый статус первой задачи:');
// console.log(taskManager.listTasks());

// taskManager.deleteTask(taskId);
// console.log('Удалена первая задача:');
// console.log(taskManager.listTasks());




// const taskManager = {
//     tasks: [],

//     addTask: function (title, description) {
//         const task = {
//             id: this.generateUniqueId(),
//             title: title,
//             description: description,
//             status: 'В работе',
//         };
//         this.tasks.push(task);
//     },


//     generateUniqueId: function () {
//         return '_' + Math.random().toString(36).substr(2, 9);
//     },


//     changeTaskStatus: function (taskId, newStatus) {
//         const task = this.tasks.find(task => task.id === taskId);
//         if (task) {
//             task.status = newStatus;
//         }
//     },


//     deleteTask: function (taskId) {
//         this.tasks = this.tasks.filter(task => task.id !== taskId);

//     },

//     deleteTask1: function (taskId) {
//         const newTasks = [];
//         for (let i = 0; i < this.tasks.length; i += 1) {
//             if (this.tasks[i].id !== taskId) {
//                 newTasks.push(this.tasks[i]);
//             }
//         }
//         this.tasks = newTasks
//     }

//     listTasks: function () {
//         return this.tasks;
//     },

//     listID: function () {
//         for (let i = 0; i < this.tasks.length; i += 1) {
//             console.log(this.tasks[i].id);
//         }
//     }
// }

// taskManager.task

// taskManager.addTask('Задача 1', 'Описание задачи 1');
// taskManager.addTask('Задача 2', 'Описание задачи 2');

// console.log('Список задач:');
// console.log(taskManager.listTasks());

// const taskId = taskManager.tasks[0].id;
// taskManager.changeTaskStatus(taskId, 'Завершено');
// console.log('Изменённый статус первой задачи:');
// console.log(taskManager.listTasks());

// taskManager.deleteTask(taskId);
// console.log('Удалена первая задача:');
// console.log(taskManager.listTasks());









// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];

// const personToFind = "Bob";
// const foundPerson = people.find(person => person.name === personToFind);
// console.log(foundPerson);



// const task = [20, 30, 40, 50, 60, 70, 80, 90, 100];

// function listNumbers() {
//     const newNumbers = [];
//     for (let i = 0; i < task.length; i += 1) { // Use 'task' instead of 'this.arr'
//         if (task[i] > 50) {
//             newNumbers.push(task[i]);
//         }
//     }
//     console.log(newNumbers); // Moved this line outside the loop
// }

// listNumbers()



// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// function listNumbers() {
//     const newNumbers = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > 50) {
//             newNumbers.push(numbers[i]);
//         }
//     }
//     console.log(newNumbers);
// }

// console.log(listNumbers());




// const taskManager = {
//     tasks: [],

//     addTask: function (title, description) {
//         const task = {
//             id: generateunqiueId(),
//             title: title,
//             description: description,
//             status: `В Работе`,
//         }
//         this.tasks.push(task)
//     },

//     generateunqiueId: function () {
//         return Math.random().toString(36).substring(2, 9);
//     },

//     listId: function (taskId) {
//         const newTask = []
//         for (let i = 0; i < this.tasks.length; i += 1) {
//             if (this.tasks.id[i] !== taskId) {
//                 this.tasks.push(newTask[i]);
//             }
//             console.log(newTask[i]);
//         }
//     },

// };


// const jonas = [
//     'Jonas',
//     'Schmidman',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i += 1) {
//     console.log(jonas[i], typeof jonas[i]);
//     types[i] = typeof jonas[i];
// }

// console.log(types);






// const taskManager = {
//     tasks: [],

//     // Метод для добавления задачи
//     addTask: function (title, description) {
//         const task = {
//             id: this.generateUniqueId(),
//             title: title,
//             description: description,
//             status: 'В работе',
//         };
//         this.tasks.push(task);
//     },

//     // Метод для генерации уникального идентификатора
//     generateUniqueId: function () {
//         return '_' + Math.random().toString(36).substr(2, 9);
//     },

//     // Метод для изменения статуса задачи по её ID
//     changeTaskStatus: function (taskId, newStatus) {
//         const task = this.tasks.find(task => task.id === taskId);
//         if (task) {
//             task.status = newStatus;
//         }
//     },

//     // Метод для удаления задачи по её ID
//     deleteTask: function (taskId) {
//         this.tasks = this.tasks.filter(task => task.id !== taskId); // цикл который находит task, которую я хочу удалить. удалить task (this.tasks.splice(foundTask, 1);)
//     },

//     // Метод для вывода всех задач
//     listTasks: function () {
//         return this.tasks; // (проход по каждой tasks и вовыд ее на экран (For цикл))
//     },
// };

// // Пример использования
// taskManager.addTask('Задача 1', 'Описание задачи 1');
// taskManager.addTask('Задача 2', 'Описание задачи 2');

// console.log('Список задач:');
// console.log(taskManager.listTasks());

// const taskId = taskManager.tasks[0].id;
// taskManager.changeTaskStatus(taskId, 'Завершено');
// console.log('Изменённый статус первой задачи:');
// console.log(taskManager.listTasks());

// taskManager.deleteTask(taskId);
// console.log('Удалена первая задача:');
// console.log(taskManager.listTasks());






// const taskManager = {
//     tasks: [],

//     addTask: function (title, description, value) {
//         const generatedId = this.generateUniqueId();
//         const task = {};
//         task.id = generatedId;
//         task.title = title;
//         task.description = description;
//         task.status = `В работе`;
//         task.value = value;
//         this.tasks.push(task);
//         return generatedId;
//     },


//     generateUniqueId: function () {
//         const x1 = Math.random();
//         const x2 = x1.toString(36);
//         const x3 = x2.substring(2, 9);
//         const x4 = '_' + x3;

//         return x4;
//     },


//     changeTaskStatus: function (taskId, newStatus) {
//         const task = this.tasks.find(task => task.id === taskId);
//         if (task) {
//             task.status = newStatus;
//         }
//     },

//     changeTaskStatus1: function (taskId, newStatus) {
//         for (let i = 0; i < this.tasks.length; i += 1) {
//             if (this.tasks[i].id === taskId) {
//                 this.tasks[i].status = newStatus;
//             }
//         }
//     },


//     deleteTask: function (taskId) {
//         this.tasks = this.tasks.filter(task => task.id !== taskId);

//     },

//     deleteTask2: function (taskId) {
//         const taskIndex = this.tasks.findIndex(task => task.id === taskId);
//         if (taskIndex !== -1) {
//             this.tasks.splice(taskIndex, 1);
//         }
//     },

//     deleteTask1: function (taskId) {
//         const newTasks = [];
//         for (let i = 0; i < this.tasks.length; i += 1) {
//             const x = this.tasks[i];
//             if (x.id !== taskId) {
//                 newTasks.push(x);
//             }
//         }
//         this.tasks = newTasks

//     },

//     listTasks: function () {
//         return this.tasks;
//     },

//     listID: function () {
//         for (let i = 0; i < this.tasks.length; i += 1) {
//             console.log(this.tasks[i].id);
//         }
//     }
// };

// // 
// const newId = taskManager.addTask(`Task 1`, `Ready`, `gold`);
// console.log(newId);
// const newId2 = taskManager.addTask(`Task 2`, `Ready`, `silver`);
// // taskManager.addTask('Задача 1', 'Описание задачи 1');
// // taskManager.addTask('Target 1', 'Mission complete');
// // taskManager.addTask('Target 2', 'Mission complete2');

// console.log('Список задач:');
// console.log(taskManager.listTasks());


// const taskId = taskManager.tasks[0].id;
// taskManager.changeTaskStatus1(taskId, 'ЗАПРЕЩЕНО!!!');
// console.log('Изменённый статус первой задачи:');
// console.log(taskManager.listTasks());

// taskManager.deleteTask2(newId);
// console.log('Удалена первая задача:');
// console.log(taskManager.listTasks());







// // let taskManager = {
// //     tasks: [
// //         { id: 1, status: 'pending' },
// //         { id: 2, status: 'in progress' },
// //         { id: 3, status: 'completed' }
// //     ],

// //     changeTaskStatus: function (taskId, newStatus) {
// //         const task = this.tasks.find(task => task.id === taskId);
// //         if (task) {
// //             task.status = newStatus;
// //         }
// //     },

// //     changeTaskStatus1: function (taskId, newStatus) {
// //         for (let i = 0; i < this.tasks.length; i += 1) {
// //             if (this.tasks[i].id === taskId) {
// //                 this.tasks[i].status = newStatus;
// //             }
// //         }
// //     }
// // };

// // // Using changeTaskStatus to update task 1's status to 'completed'
// // taskManager.changeTaskStatus(1, 'completed');

// // // Using changeTaskStatus1 to update task 2's status to 'pending'
// // taskManager.changeTaskStatus1(2, 'pending');

// // // After these operations, the tasks array will look like this:
// // // tasks: [
// // //     { id: 1, status: 'completed' },
// // //     { id: 2, status: 'pending' },
// // //     { id: 3, status: 'completed' }
// // // ]s

// // console.log(taskManager);




// // const numbers = [1, 2, 3, -4, 5, -6, -7];

// // const filtered = numbers.filter(n => n >= 0);

// // console.log(filtered)






// // const numbers = [1, 2, 3, 4, 5, 6, 7];

// // console.log(numbers.indexOf(4));



// // const users = [{ id: 1, name: "Masha" }, { id: 2, name: "Alex" }, { id: 3, name: "Patrick" }]

// // const a = users.find((user) => user.id == 3);

// // console.log(a)












// // this.tasks.filter(fn)
// // this.tasks.find(fn)
// // this.tasks.findIndex(fn)
// // this.tasks.map(fn)
// // this.tasks.forEach(fn)






// const numbers = [1, 2, 4, 5, 3, 6];
// const res = numbers.findIndex(findThree);

// function findThree(value) {
//     return value === 3;
// };

// console.log(res);



// const taskManager = {
//     tasks: [],
//     addTask: function (title, id) {
//         task = {
//             id: id,
//             title: title,
//             description: "Start"
//         }
//         this.tasks.push(task)
//     },

//     listTasks: function () {
//         for (let i = 0; i < this.tasks.length; i++) {
//             const id = this.tasks[i].id;
//             const title = this.tasks[i].title;
//             console.log(`${id}, ${title}`);
//         }
//     },

//     deleteTask: function (taskId) {
//         for (let i = 0; i < this.tasks.length; i++)
//             if (this.tasks[i].id === taskId) {
//                 this.tasks.splice(i, 1);
//             }
//     }
// };


// taskManager.addTask("Beginner", 10);
// taskManager.listTasks();



// const numbers = [1, 2, 4, 5, 6, 7, 8, 9, 10, 3, 11, 12, 13];
// const res = numbers.findIndex(findThree);

// function findThree(value) {
//     return value === 3;
// };

// console.log(res);



// Теперь он идеален
const taskManager = {
    tasks: [],
    addTask: function (title, id, status) {
        task = {
            id: id,
            title: title,
            description: "Start",
            status: status,
        }
        this.tasks.push(task)
    },

    listTasks: function () {
        for (let i = 0; i < this.tasks.length; i++) {
            const id = this.tasks[i].id;
            const title = this.tasks[i].title;
            const status = this.tasks[i].status;
            console.log(`${id}, ${title}, ${status}`);
        }
    },

    deleteTask: function (taskId) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === taskId) {
                this.tasks.splice(i, 1);
            }
        }
    },

    changeStatus: function (taskId, newStatus) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === taskId) {
                this.tasks[i].status = newStatus;
            }
        }
    },
};

taskManager.addTask("Beginner1", 10, "Starter");
taskManager.addTask("Beginner2", 11, "Starter2");
taskManager.changeStatus(10, "Changed Status");
taskManager.deleteTask(10);
taskManager.listTasks();





function calculateFuel(n) {
    let fuel = n * 10
    if (fuel < 100) {
        return fuel = 100
    } else {
        return fuel
    }
}


