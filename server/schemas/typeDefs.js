const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Auth {
  token: ID!
  user: User
}

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedProducts: [Products]
  }
  type Products {
    _id: ID!
    title : String!
    image: String!
    description: String!
    link: String!
    reviews: [String]
    ratings: [Int]
  }

  type Query {
   me(id:ID!):User 
   getProducts: [Products]
   getSingleProduct(id: ID!): Products
  }

  type Mutation {
    createUser(email: String!, username: String!, password: String!): Auth
    updateUser(email: String!, username: String!, password: String!): User
    deleteUser(username: String!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
