// Практика

// 1. Створіть функцію з Generics, яка приймає масив чисел або рядків повертає новий масив, де кожен елемент масиву дублюється.

// const numArr = [1, 2, 3]; // [1, 2, 3, 1, 2, 3]
// const strArr = ["a", "b", "c"]; // ["a", "b", "c", "a", "b", "c"]

// function duplicateElements<T>(arr: T[]): T[] {
//   return arr.concat(arr);
// }

// console.log(duplicateElements<number>(numArr));
// console.log(duplicateElements<string>(strArr));

// 2. Створіть функцію compareValues, яка приймає два параметри типу T для порівняння значень. // Використайте оператор === для порівняння значень параметрів. // Якщо значення рівні, поверніть "Values are equal." // Якщо значення не рівні, поверніть "Values are not equal." //  // compareValues(5, 5); // compareValues("hello", "world");

// function compareValues<T>(arg1: T, arg2: T): string {
//   return arg1 === arg2 ? "Values are equal." : "Values are not equal.";
// }

// console.log(compareValues<number>(5, 5));
// console.log(compareValues<string>("hello", "world"));

// 3. Створіть інтерфейс Product, який має наступні властивості та методи:
// id (число)
// name (рядок)
// price (число)
// description (рядок)
// getShortDescription(): string - метод, який повертає короткий опис продукту. (10 символів з властивості description + '...')
// Створіть клас Product, який реалізує інтерфейс Product.
// Клас повинен мати конструктор для ініціалізації властивостей id, name, price, та description.
// У класі Product реалізуйте метод getShortDescription який логує (description)
// const iPhone = new Product(1145, 'iPhone 15 ', 47499,"Кожне нове покоління оригінальних смартфонів від творців з Купертіно по-своєму дивує і відкриває перед користувачами низку нових можливостей для творчості, роботи та відпочинку. Яскравіший дисплей, приріст оперативної памʼяті та збільшення базового вбудованого сховища — ми отримали багато цікавого та несподіваного з виходом новинки Епл 2023 року. То ж пропонуємо ближче познайомитись новинкою, та розглянути ключові зміни в дизайні та характеристиках.")

// Створи клас Electronics який походить від Product та опиши його інтерфейс, додавши властивість brand(ряддок) та метод powerOn() який виводить повідомлення про включення електронічного пристрою.
// Створи клас Clothing  який походить від Product та опиши його інтерфейс, додавши властивість size (ряддок) та метод wear() який виводить повідомлення про надягання одягу.

// interface IProduct {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   getShortDescription(): string;
// }

// abstract class Product implements IProduct {
//   constructor(
//     public id: number,
//     public name: string,
//     public price: number,
//     public description: string
//   ) {}
//   getShortDescription(): string {
//     return `${this.description.slice(0, 10)}...`;
//   }
// }

// interface IElectronics {
//   brand: string;
//   powerOn(): void;
// }

// class Electronics extends Product implements IElectronics {
//   constructor(
//     id: number,
//     name: string,
//     price: number,
//     description: string,
//     public brand: string
//   ) {
//     super(id, name, price, description);
//   }
//   powerOn(): void {
//     console.log('Fecilitie is "ON"');
//   }
// }

// interface IClothing {
//   size: string;
//   wear(): void;
// }

// class Clothing extends Product implements IClothing {
//   constructor(
//     id: number,
//     name: string,
//     price: number,
//     description: string,
//     public size: string
//   ) {
//     super(id, name, price, description);
//   }
//   wear(): void {
//     console.log(`Waered clothes with "${this.size}" size`);
//   }
// }

// const laptop: Product & IElectronics = new Electronics(
//   123,
//   "Laptop",
//   1200,
//   "Ноутбук Dell відомий своєю надійністю, продуктивністю та інноваційним дизайном. Цей пристрій підходить для широкого спектра завдань, від офісної роботи до розважальних потреб, забезпечуючи бездоганний користувацький досвід",
//   "Dell"
// );
// console.log(laptop.getShortDescription());
// laptop.powerOn();

// const tShirt: Product & IClothing = new Clothing(
//   758,
//   "T-Shirt",
//   20,
//   "Базова футболка - це незамінний елемент гардероба, який підходить для будь-якого випадку. Виготовлена з високоякісних матеріалів, вона забезпечує комфорт і стиль протягом усього дня. Лаконічний дизайн дозволяє легко поєднувати футболку з різними стилями одягу.",
//   "Medium"
// );
// console.log(tShirt.getShortDescription());
// tShirt.wear();

// 4. Створи клас Book та опиши його інтерфейс
// title  (рядок)
// author   (рядок)
// isBorrowed (буль) - протектед
// метод markAsBorrowed який встановлює книгу як позичену. - протектед
// Стоври клас Library та опиши його інтерфейс
// books (масив) масив книг в бібілотеці
// метод add() буде додавати книгу в масив (екземпляр класу Book)
// метод borrowBook() для оренди книги який приймаЄ назву книги
// метод getBorrowedBooks повертає масив всіх орендованих книг
// метод getAvailableBooks повертає масив всіх достпуних книг

interface IBook {
  title: string;
  author: string;
  set isBorrowedBook(status: boolean);
  get isBorrowedBook(): boolean;
}

class Book implements IBook {
  constructor(
    public title: string,
    public author: string,
    protected isBorrowed: boolean = false
  ) {}
  set isBorrowedBook(status: boolean) {
    this.isBorrowed = status;
  }
  get isBorrowedBook(): boolean {
    return this.isBorrowed;
  }
}

interface ILibrary {
  books: Book[];
  add(book: Book): void;
  borrowBook(title: string): void;
  getBorrowedBooks(): Book[];
  getAvailableBooks(): Book[];
}

class Library implements ILibrary {
  public books: Book[] = [];
  add(book: Book): void {
    this.books.push(book);
  }
  borrowBook(title: string): void {
    const currentBook = this.books.find(
      ({ title: bookTitle }) => bookTitle === title
    );
    if (currentBook) currentBook.isBorrowedBook = true;
  }
  getBorrowedBooks(): Book[] {
    return this.books.filter((book) => book.isBorrowedBook);
  }
  getAvailableBooks(): Book[] {
    return this.books.filter((book) => !book.isBorrowedBook);
  }
}

const HarryPotter: Book = new Book("HarryPotter", "Joan Rouling");
const HarryPotter1: Book = new Book("HarryPotter1", "Joan Rouling");
const HarryPotter2: Book = new Book("HarryPotter2", "Joan Rouling");
const HarryPotter3: Book = new Book("HarryPotter3", "Joan Rouling");

const library: Library = new Library();
library.add(HarryPotter);
library.add(HarryPotter1);
library.add(HarryPotter2);
library.add(HarryPotter3);

library.borrowBook("HarryPotter");

console.log("Library: ", library);
console.log("Borrowed books: ", library.getBorrowedBooks());
console.log("Awailable books: ", library.getAvailableBooks());
