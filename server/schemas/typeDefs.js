// import GraphQL
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: id
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: id
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    books: [Book]!
    book: (bookId: ID!): Book
    users: [User]!
    user: (userId: ID!): User
    getMe: (token: ID!): User
  }

  type Mutation {
    createUser(email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    saveBook()
    deleteBook()
  }
`