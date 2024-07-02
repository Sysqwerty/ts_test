// === ReturnType<T> ===;
// Дозволяє отримати тип функції, що повертається.Для функцій він має використовуватися з typeof.

// === Parameters<T> ===;
// Витягує типи параметрів типу функції T. Вона повертає кортеж, що містить типи всіх параметрів функції T у тому порядку, в якому вони оголошені.

// Приклад декоорування

// В данному випадку Callback це тип, який представляє функцію з будь-якою кількістю аргументів будь-якого типу (unknown[]) і яка повертає значення будь-якого типу (unknown).
type Callback = (...args: unknown[]) => unknown;

// Ця функція приймає аргумент func типу T, де T є типом, який успадковується від Callback (тобто, це будь-яка функція).
function createLoggedFunction<T extends Callback>(func: T) {
  // Ця змінна просто зберігає посилання на функцію func.
  let funcRef = func;

  // ...args: Parameters<T>:
  // Використовує вбудований тип TypeScript Parameters<T>, щоб отримати типи аргументів функції T.
  const loggedFunction = (...args: Parameters<T>) => {
    // Логує ім'я функції та її аргументи.
    console.log(`Function ${func.name} was called with arguments:`, args);
    // Викликає оригінальну функцію з аргументами та зберігає результат. Використовує ReturnType<T>, щоб вказати тип результату функції T.
    const result = funcRef(...args) as ReturnType<T>;
    // Повертає результат виклику оригінальної функції.
    return result;
  };

  return loggedFunction;
}

// Приклад використання
function add(a: number, b: number): number {
  return a + b;
}

const loggedAdd = createLoggedFunction(add);

const result = loggedAdd(2, 3); // Лог: "Function add was called with arguments: [2, 3]"
console.log(result); // 5
