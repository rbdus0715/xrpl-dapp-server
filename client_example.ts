import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';

// Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:5500/graphql', // ← 여기서 https → http 로 바꾸기
  cache: new InMemoryCache(),
});

// Mutation
const CREATE_POINT_TRANSACTION = gql`
  mutation {
    createPointTransaction(
      createPointTransactionInput: {
        value: 500
        currency: "XRP"
        transactionIndex: 3
        transactionResult: "SUCCESS"
        account: "asdfasdfasdf"
        destination: "adflk3lkj"
        fee: 1
        transactionType: "PAYMENT"
        path: ["333", "asdf"]
        hash: "1234jsdlfk"
      }
    ) {
      id
      value
      # 더 추가 가능
    }
  }
`;

async function main() {
  try {
    const result = await client.mutate({ mutation: CREATE_POINT_TRANSACTION });
    console.log(result.data);
  } catch (error) {
    console.error(error);
  }
}

main();
