// === ReturnType<T> ===;
// Дозволяє отримати тип функції, що повертається.Для функцій він має використовуватися з typeof.
// Ця функція приймає аргумент func типу T, де T є типом, який успадковується від Callback (тобто, це будь-яка функція).
function createLoggedFunction(func) {
    // Ця змінна просто зберігає посилання на функцію func.
    let funcRef = func;
    // ...args: Parameters<T>:
    // Використовує вбудований тип TypeScript Parameters<T>, щоб отримати типи аргументів функції T.
    const loggedFunction = (...args) => {
        // Логує ім'я функції та її аргументи.
        console.log(`Function ${func.name} was called with arguments:`, args);
        // Викликає оригінальну функцію з аргументами та зберігає результат. Використовує ReturnType<T>, щоб вказати тип результату функції T.
        const result = funcRef(...args);
        // Повертає результат виклику оригінальної функції.
        return result;
    };
    return loggedFunction;
}
// Приклад використання
function add(a, b) {
    return a + b;
}
const loggedAdd = createLoggedFunction(add);
const result = loggedAdd(2, 3); // Лог: "Function add was called with arguments: [2, 3]"
console.log(result); // 5
//# sourceMappingURL=utiliteTypes.js.map