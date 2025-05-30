import { InputType, OmitType } from '@nestjs/graphql';
import { PointTransaction } from '../entities/pointTransaction.entity';
@InputType()
export class CreatePointTransactionInput extends OmitType(
  PointTransaction,
  ['id'],
  InputType,
) {}
