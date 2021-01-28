const findById = require("./findby");

function findAccountById(accounts, id) {
  return findById(accounts, id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1
  );
}

function numberOfBorrows({id}, books) {
  let count = 0;
  for (book of books) {
    for (val of book.borrows) {
      let previousIDs = Object.values(val);
      if (previousIDs[0] === id) {
        count++;
      }
    }
  }

  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      return (
        book.borrows[0].id === account.id && book.borrows[0].returned === false
      );
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
