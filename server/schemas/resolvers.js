const { Book } = require("../models");

const resolver = {
  Query: {
    books: async () => {
      return Book.find();
    },
    book: async (parent, { title }) => {
      return Book.findOne({ title });
    },
  },
  Mutation: {
    addBook: async (parent, args) => {
      const book = await Book.insertMany(args);
      return book;
    },
    removeBook: async (parent, { _id }) => {
      return Book.deleteOne({ _id });
    },
  },
};

module.exports = resolver;
