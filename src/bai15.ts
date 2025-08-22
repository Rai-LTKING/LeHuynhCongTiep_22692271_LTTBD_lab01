//bai15
import { Book } from './bai06';
import { User } from './bai07';

export class Library {
  books: Book[] = [];
  users: User[] = [];

  addBook(book: Book) {
    this.books.push(book);
  }
}