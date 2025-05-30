## 0. 실행 방법
```bash
docker-compose build
docker-compose up
```
- localhost:5500/graphql 플레이그라운드 접속 가능
- client_example.ts 예제 확인

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