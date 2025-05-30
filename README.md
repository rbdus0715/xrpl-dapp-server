```bash
yarn start:dev
```

## 1. save transaction
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
## 2. fetch transaction
```ts
query {
  getPointTransactions {
    // 받고 싶은 필드를 입력하세요. ex) id, value, currency
  }
}
```