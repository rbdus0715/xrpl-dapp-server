import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PointsTransactionsService } from './pointsTransactions.service';
import { CreatePointTransactionInput } from './dto/create-pointTransaction.input';
import { PointTransaction } from './entities/pointTransaction.entity';

@Resolver()
export class PointsTransactionsResolver {
  constructor(
    private readonly pointsTransactionsService: PointsTransactionsService,
  ) {}

  //   @Field(() => [String], { nullable: true })
  //   paths: string[];
  @Query(() => [PointTransaction])
  getPointTransactions(): Promise<PointTransaction[]> {
    return this.pointsTransactionsService.findAll();
  }

  @Mutation(() => PointTransaction)
  createPointTransaction(
    @Args('createPointTransactionInput')
    createPointTransactionInput: CreatePointTransactionInput,
  ): Promise<PointTransaction> {
    return this.pointsTransactionsService.create({
      createPointTransactionInput,
    });
  }
}
