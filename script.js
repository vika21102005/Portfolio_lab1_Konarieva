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

// === ЛАБОРАТОРНА РОБОТА №5: DOM, Події та API ===

// 1. Ініціалізація змінних (Вимога 2.1)
const taskList = document.getElementById('taskList');
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const loader = document.getElementById('loader');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const activeCountSpan = document.getElementById('activeCount');

// 2. Функція відображення лоадера
const toggleLoader = (show) => loader.style.display = show ? 'block' : 'none';

// 3. Функція створення DOM-елемента завдання (Вимоги 2.2, 2.3)
function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.style = `display: flex; align-items: center; justify-content: space-between; 
                padding: 10px; border-bottom: 1px solid #eee; background: white; margin-bottom: 5px;`;
    li.dataset.id = task.id; // Збереження ID в data-атрибуті (Вимога 2.2)

    if (task.completed) li.style.opacity = '0.6';

    li.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
            <span class="task-title" style="${task.completed ? 'text-decoration: line-through;' : ''}">
                ${task.title}
            </span>
        </div>
        <button class="delete-btn" style="background: #ff4d4d; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 4px;">Видалити</button>
    `;
    return li;
}

// 4. Отримання даних з API (Вимога 4.5: async/await + Promise.all)
async function fetchInitialData() {
    toggleLoader(true);
    try {
        // Використовуємо Promise.all для паралельних запитів (наприклад, завдання + дані користувача)
        const [tasksRes, userRes] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=10'),
            fetch('https://jsonplaceholder.typicode.com/users/1')
        ]);

        const tasks = await tasksRes.json();
        const user = await userRes.json();
        
        console.log(`Вітаємо, ${user.name}! Ваші завдання завантажено.`);
        
        tasks.forEach(task => {
            taskList.appendChild(createTaskElement(task));
        });
        updateStats();
    } catch (error) {
        console.error("Помилка завантаження:", error);
        alert("Не вдалося завантажити дані з сервера.");
    } finally {
        toggleLoader(false);
    }
}

// 5. Обробка подій клавіатури (Вимога 3.5, 5.2)
todoInput.addEventListener('input', () => {
    // Кнопка стає активною тільки якщо введено текст
    addBtn.disabled = !todoInput.value.trim();
});

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        todoInput.value = '';
        addBtn.disabled = true;
    }
});

// 6. Додавання нового завдання (Вимога 4.3: POST запит)
todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = todoInput.value.trim();
    if (!title) return;

    toggleLoader(true);
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({ title, completed: false, userId: 1 }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });
        const newTask = await response.json();
        
        // Оскільки API фейкове, воно завжди повертає ID 201. 
        // Для коректної роботи в DOM згенеруємо унікальний ID.
        newTask.id = Date.now();
        
        taskList.prepend(createTaskElement(newTask));
        todoForm.reset();
        addBtn.disabled = true;
        updateStats();
    } catch (err) {
        alert("Помилка при збереженні завдання");
    } finally {
        toggleLoader(false);
    }
});

// 7. Делегування подій (Вимога 3.1)
taskList.addEventListener('click', async (e) => {
    const li = e.target.closest('.task-item');
    if (!li) return;
    const taskId = li.dataset.id;

    // Видалення (Вимога 4.4: DELETE запит)
    if (e.target.classList.contains('delete-btn')) {
        li.style.background = '#ffe6e6'; // Візуальний ефект перед видаленням
        try {
            await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, { method: 'DELETE' });
            li.remove();
            updateStats();
        } catch (err) { alert("Не вдалося видалити"); }
    }

    // Зміна статусу (Вимога 4.3: PATCH запит)
    if (e.target.classList.contains('task-checkbox')) {
        const isCompleted = e.target.checked;
        const titleSpan = li.querySelector('.task-title');
        
        try {
            await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
                method: 'PATCH',
                body: JSON.stringify({ completed: isCompleted }),
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            });
            
            titleSpan.style.textDecoration = isCompleted ? 'line-through' : 'none';
            li.style.opacity = isCompleted ? '0.6' : '1';
            updateStats();
        } catch (err) { 
            e.target.checked = !isCompleted; // Відкат стану чекбокса при помилці
            alert("Помилка оновлення статусу"); 
        }
    }
});

// 8. Пошук та фільтрація (Вимоги 3.3, 4.1)
function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;
    const items = taskList.querySelectorAll('.task-item');

    items.forEach(item => {
        const title = item.querySelector('.task-title').textContent.toLowerCase();
        const isCompleted = item.querySelector('.task-checkbox').checked;

        const matchesSearch = title.includes(searchText);
        let matchesFilter = true;

        if (filterValue === 'active') matchesFilter = !isCompleted;
        if (filterValue === 'completed') matchesFilter = isCompleted;

        item.style.display = (matchesSearch && matchesFilter) ? 'flex' : 'none';
    });
}

// Реалізація Debounce для пошуку (Вимога 3.3)
function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

searchInput.addEventListener('input', debounce(applyFilters, 300));
filterSelect.addEventListener('change', applyFilters);

// 9. Оновлення лічильника
function updateStats() {
    const count = taskList.querySelectorAll('.task-checkbox:not(:checked)').length;
    activeCountSpan.textContent = count;
}

// Запуск програми
fetchInitialData();