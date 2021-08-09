const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate('savedBooks');
        
        return userData;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials")
      }

      const token = signToken(user);
      return { token, user };
    },

    // saveBook: async (parent, { input: { bookId, authors, description, title, image, link } }, context) => {
    //   if (context.user) {
    //     const userBooks = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { savedBooks: { input: { bookId, authors, description, title, image, link } } } },
    //       { new: true, runValidators: true }
    //     ).populate('savedBooks');

    //     return userBooks;
    //   }

    //   throw new AuthenticationError('You need to be logged in!')
    // },

    // saveBook: async (parent, { userId, input: { bookId, authors, description, title, image, link } }, context) => {
    //   const userBooks = await User.findOneAndUpdate(
    //     { _id: userId },
    //     { $addToSet: { savedBooks: { bookId, authors, description, title, image, link } } },
    //     { new: true }
    //   ).populate('savedBooks');

    //   return userBooks;
    // },

    saveBook: async (parent, { input: { bookId, authors, description, title, image, link } }, context) => {
      if (context.user) {
        const userBooks = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: { bookId, authors, description, title, image, link } } },
          { new: true }
        ).populate('savedBooks');

        return userBooks;
      }
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const userBooks = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: bookId } },
          { new: true }
        ).populate('savedBooks');

        return userBooks;
      }

      throw new AuthenticationError('You need to be logged in!')
    },
  }
};

module.exports = resolvers;