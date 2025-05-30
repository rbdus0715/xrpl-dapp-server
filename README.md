# 0. 실행 방법
### 도커로 실행
```bash
docker-compose build
docker-compose up
```
### 로컬에서 실행
```bash
yarn install
yarn start:dev
```
# 1. 클라이언트
## API 요청 시 필요한 패키지
```bash
# npm이면 npm으로 다운받아주세요.
yarn add @apollo/client graphql cross-fetch
```
### 방법
- localhost:5500/graphql 플레이그라운드 접속 가능
- client_example.ts 예제 확인

# 2. API
### 2. save transaction
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
### 3. fetch transaction
```ts
query {
  getPointTransactions {
    // 받고 싶은 필드를 입력하세요. ex) id, value, currency
  }
}
```

