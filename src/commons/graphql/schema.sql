# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type PointTransaction {
  id: String!
  value: Int!
  currency: String!
  transactionIndex: Int!
  transactionResult: String!
  account: String!
  destination: String!
  fee: Int!
  transactionType: String!
  hash: String!
  path: [String!]
}

type Query {
  getPointTransactions: [PointTransaction!]!
}

type Mutation {
  createPointTransaction(createPointTransactionInput: CreatePointTransactionInput!): PointTransaction!
}

input CreatePointTransactionInput {
  value: Int!
  currency: String!
  transactionIndex: Int!
  transactionResult: String!
  account: String!
  destination: String!
  fee: Int!
  transactionType: String!
  hash: String!
  path: [String!]
}