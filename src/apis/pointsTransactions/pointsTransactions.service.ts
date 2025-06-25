import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { PointTransaction } from './entities/pointTransaction.entity';
import {
  IPointsTransactionsServiceCreate,
  IPointsTransactionsServiceFindByAccount,
} from './interfaces/points-transactions-service.interface';

@Injectable()
export class PointsTransactionsService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointsTransactionsRepository: Repository<PointTransaction>,
    private readonly dataSource: DataSource,
  ) {}

  async findAll(): Promise<PointTransaction[]> {
    return await this.pointsTransactionsRepository.find();
  }

  async findByAccount({
    account,
  }: IPointsTransactionsServiceFindByAccount): Promise<PointTransaction[]> {
    return await this.pointsTransactionsRepository.find({
      where: {
        account,
      },
    });
  }

  async create({
    createPointTransactionInput,
  }: IPointsTransactionsServiceCreate): Promise<PointTransaction> {
    return await this.pointsTransactionsRepository.save({
      ...createPointTransactionInput,
    });
  }
}
