const { User, Product } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const bcrypt = require("bcrypt")

const resolvers = {
  Query: {
    getProducts: async () => {
      return Product.find({});
    },
    getSingleProduct: async (_, {id}) => {
      return Product.findById(id)
    },
    me: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return {user, token};
    },
    updateUser: async (parent, args) => {
        const user = await User.updateOne(args);
        return user
    },
    deleteUser: async(parent, args) => {
        const user = await User.delete(args);
        return user;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      // const correctPw = await User.isCorrectPassword(password);
      const correctPw = await bcrypt.compareSync(password, user.password)

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

  },
};

module.exports = resolvers;
