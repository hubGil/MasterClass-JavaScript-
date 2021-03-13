// const book = {};
// const book = new Object();
const book = Object.create(null);
book.title = "Clean Code";
book.author = "Robert Martin";
book.pages = 464;
book.language = "English";
book.available = true;

console.log(book);