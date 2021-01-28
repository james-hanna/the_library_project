function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(Accounts) {
  return Accounts.length;
}

function booksBorrowedCount(books) {
  return books.filter((book) => book.borrows[0].returned === false).length;
}

function getMostCommonGenres(books) {
  const count = books.reduce((counter, { genre }) => {
    if (counter[genre]) {
      counter[genre]++;
    } else {
      counter[genre] = 1;
    }
    return counter;
  }, []);
  let newList = [];
  for (genre in count) {
    newList.push({ name: genre, count: count[genre] });
  }
  return newList
    .sort((genre1, genre2) => {
      return genre1.count > genre2.count ? -1 : 1;
    })
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  const count = books.reduce((counter, { title, borrows }) => {
    counter[title] = borrows.length;
    return counter;
  }, []);
  let popularBooks = [];
  for (book in count) {
    popularBooks.push({ name: book, count: count[book] });
  }
  return popularBooks
    .sort((book1, book2) => {
      return book1.count > book2.count ? -1 : 1;
    })
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const count = books.reduce((counter, { authorId, borrows }) => {
    counter[authorId] = borrows.length;
    return counter;
  }, []);
  let popularAuthors = [];
  for (author in count) {
    const auth = authors.find((auth) => auth.id == author);
    const authName = `${auth.name.first} ${auth.name.last}`;
    popularAuthors.push({ name: authName, count: count[author] });
  }
  return popularAuthors
    .sort((author1, author2) => {
      return author1.count > author2.count ? -1 : 1;
    })
    .slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
