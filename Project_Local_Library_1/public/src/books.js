const findById = require("./findby");

function findAuthorById(authors, id) {
  return findById(authors, id);
}

function findBookById(books, id) {
  return findById(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  const bookStatusLent = books
    .filter((book) => book.borrows[0].returned === false)
    .map((book) => book);
  const bookStatusReturned = books
    .filter((book) => book.borrows[0].returned === true)
    .map((book) => book);
  let arrayOfBooks = [bookStatusLent, bookStatusReturned];
  return arrayOfBooks;
}

function getBorrowersForBook({borrows}, accounts) {
  let updatedList = [];

  for (account of accounts) {
    for (checkOut of borrows) {
      if (checkOut.id === account.id) {
        if (updatedList.length < 10) {
          updatedList.push({ ...checkOut, ...account });
        }
      }
    }
  }
  return updatedList;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
