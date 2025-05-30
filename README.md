```bash
yarn start:dev
```

## feat 1 - transaction save
```ts
mutation {
  createPointTransaction(createPointTransactionInput: {
    value: String!
    currency: Int!
    transactionIndex: Int!
    transactionResult: String!
    account: string!
    destination: String!
    fee: Int!
    transactionType: String!
    path: [String!]
    hash: String
  }){
    // 받고 싶은 필드를 입력하세요. ex) id, value, currency
  }
}
```
```ts
query {
  getPointTransactions {
    // 받고 싶은 필드를 입력하세요. ex) id, value, currency
  }
}
```