import { CreatePointTransactionInput } from '../dto/create-pointTransaction.input';

export interface IPointsTransactionsServiceCreate {
  createPointTransactionInput: CreatePointTransactionInput;
}

export interface IPointsTransactionsServiceFindByAccount {
  account: string;
}
