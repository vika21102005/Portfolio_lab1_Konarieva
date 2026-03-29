/**
 * ЛАБОРАТОРНА РОБОТА №4
 * Тема: JavaScript основи та логіка
 */

// === ЗАВДАННЯ 1: ЗМІННІ ТА ТИПИ ДАНИХ (10 балів) ===
// [cite: 25, 60, 62]
console.group("Завдання 1: Змінні та типи даних");

const myString = "Привіт, світ!";      // String [cite: 28]
const myNumber = 2026;                 // Number [cite: 29]
const myBoolean = true;                // Boolean [cite: 32]
const myNull = null;                   // Null [cite: 33]
const myUndefined = undefined;         // Undefined [cite: 34]
const mySymbol = Symbol("id");         // Symbol [cite: 37]
const myBigInt = 100n;                 // BigInt [cite: 39]

// Вивід значень та їх типів [cite: 63]
console.log("Значення:", myString, "| Тип:", typeof myString);
console.log("Значення:", myNumber, "| Тип:", typeof myNumber);
console.log("Значення:", myBoolean, "| Тип:", typeof myBoolean);
console.log("Значення:", myNull, "| Тип:", typeof myNull); // Виведе object (відомий баг JS) [cite: 41]

// Явне перетворення типів [cite: 64, 65, 67, 71]
console.log("Number('123'):", Number("123")); 
console.log("Boolean(0) (falsy):", Boolean(0)); 
console.log("String(true):", String(true));

// Шаблонні рядки [cite: 73, 77]
const studentName = "Олексій";
const university = "КПІ";
console.log(`Студент: ${studentName}, університет: ${university}`);

// Порівняння == та === [cite: 78]
console.log("5 == '5':", 5 == "5");   // true (приведення типів)
console.log("5 === '5':", 5 === "5"); // false (суворе порівняння)

console.groupEnd();


// === ЗАВДАННЯ 2: УМОВИ ТА ЛОГІКА (10 балів) ===
// [cite: 79, 81]
console.group("Завдання 2: Умови та логіка");

// 1. Функція getGrade [cite: 82, 89]
function getGrade(score) {
    if (typeof score !== 'number' || score < 0 || score > 100) return "невалідний бал";
    if (score >= 90) return "відмінно";
    if (score >= 75) return "добре";
    if (score >= 60) return "задовільно";
    return "незадовільно";
}
console.log("Оцінка за 85 балів:", getGrade(85));

// 2. Функція getSeasonUA (switch) [cite: 90]
function getSeasonUA(month) {
    switch (month) {
        case 12: case 1: case 2: return "Зима";
        case 3: case 4: case 5: return "Весна";
        case 6: case 7: case 8: return "Літо";
        case 9: case 10: case 11: return "Осінь";
        default: return "Невірний номер місяця";
    }
}
console.log("4-й місяць це:", getSeasonUA(4));

// 3. Тернарний оператор [cite: 91, 93]
const age = 19;
const status = age >= 18 ? "повнолітній" : "неповнолітній";
console.log(`Статус студента: ${status}`);

console.groupEnd();


// === ЗАВДАННЯ 3: МАСИВИ (15 балів) ===
// [cite: 96, 137, 138]
console.group("Завдання 3: Масиви");

let students = [
    { name: "Олена", grade: 87, courses: ["JavaScript", "HTML"] },
    { name: "Іван", grade: 92, courses: ["CSS", "JavaScript"] },
    { name: "Марія", grade: 55, courses: ["HTML"] },
    { name: "Петро", grade: 78, courses: ["JavaScript"] },
    { name: "Анна", grade: 95, courses: ["Design"] },
    { name: "Олег", grade: 65, courses: ["HTML", "CSS"] }
];

// Модифікація [cite: 146, 147, 148]
students.push({ name: "Віталій", grade: 88, courses: ["JS"] }); // Додати в кінець
students.pop(); // Видалити останнього

// Методи масивів [cite: 151, 152, 153]
const excellentStudent = students.find(s => s.grade > 90);
const jsLearners = students.filter(s => s.courses.includes("JavaScript"));
const avgGrade = students.reduce((acc, s) => acc + s.grade, 0) / students.length;

console.log("Перший відмінник:", excellentStudent);
console.log("Середня оцінка:", avgGrade.toFixed(2));

console.groupEnd();


// === ЗАВДАННЯ 4: ФУНКЦІЇ (20 балів) ===
// [cite: 155, 157]
console.group("Завдання 4: Функції");

// Три способи оголошення функції площі [cite: 158, 159, 160, 161]
function areaDecl(a, b) { return a * b; } // Declaration
const areaExpr = function(a, b) { return a * b; }; // Expression
const areaArrow = (a, b) => a * b; // Arrow

// Замикання (Closure) [cite: 162, 165]
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
}
const counter = createCounter();
console.log("Counter:", counter.increment(), counter.increment(), counter.getValue());

// Rest-параметри [cite: 177, 178]
const sumAll = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log("Сума (10, 20, 30):", sumAll(10, 20, 30));

console.groupEnd();


// === ЗАВДАННЯ 5: ОБ'ЄКТИ (15 балів) ===
// [cite: 189, 191]
console.group("Завдання 5: Об'єкти");

const studentProfile = {
    firstName: "Андрій",
    lastName: "Мельник",
    grades: { math: 85, physics: 92 },
    getFullName() { return `${this.firstName} ${this.lastName}`; } // [cite: 199]
};

// Spread-копія [cite: 204]
const updatedProfile = { ...studentProfile, age: 21 };

// Optional chaining [cite: 205, 207]
console.log("Lab score:", studentProfile.grades?.lab ?? "Не призначено");

console.groupEnd();

// === Завдання 6. Ланцюжки методів (20 балів) ===
console.group("Завдання 6: Ланцюжки");

const products = [
    { name: "Ноутбук", price: 25000, category: "electronics", inStock: true, quantity: 2 },
    { name: "Смартфон", price: 15000, category: "electronics", inStock: true, quantity: 4 },
    { name: "Мишка", price: 500, category: "electronics", inStock: false, quantity: 0 },
    { name: "Стіл", price: 3000, category: "furniture", inStock: true, quantity: 1 },
    // додайте ще 4 товари для повноти списку (мін 8 за умовою) [cite: 213]
];

// 2. Вартість товарів у наявності [cite: 222]
const totalValue = products
    .filter(p => p.inStock)
    .map(p => p.price * p.quantity)
    .reduce((acc, val) => acc + val, 0);
console.log("Загальна вартість:", totalValue);

// 3. Сортування категорії electronics [cite: 223]
const sortedElectronics = products
    .filter(p => p.category === "electronics")
    .sort((a, b) => a.price - b.price)
    .map(p => p.name);
console.log("Електроніка за ціною:", sortedElectronics);
console.groupEnd();

// === ЗАВДАННЯ 7: РЯДКИ (10 балів) ===
// [cite: 228, 230]
console.group("Завдання 7: Рядки");

// capitalize [cite: 231]
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(capitalize("javaScript")); // "Javascript"

// isValidEmail (indexOf, includes) [cite: 241]
function isValidEmail(email) {
    const atPos = email.indexOf('@');
    const dotPos = email.lastIndexOf('.');
    return email.includes('@') && atPos > 0 && dotPos > atPos + 1;
}
console.log("Email 'test@me.com' valid?", isValidEmail("test@me.com"));

console.groupEnd();

// Функція для відображення результатів на сторінці (як вимагає завдання 21)
document.getElementById('output').innerHTML = `
    <p><b>Студент:</b> ${studentName}</p>
    <p><b>Середній бал:</b> ${avgGrade.toFixed(1)}</p>
    <p><b>Статус:</b> ${status}</p>
    <p>Більше деталей дивіться у консолі (F12).</p>
`;