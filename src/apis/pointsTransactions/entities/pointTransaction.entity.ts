import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class PointTransaction {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => Int)
  value: number;

  @Column()
  @Field(() => String)
  currency: string;

  @Column()
  @Field(() => Int)
  transactionIndex: number;

  @Column()
  @Field(() => String)
  transactionResult: string;

  @Column()
  @Field(() => String)
  account: string;

  @Column()
  @Field(() => String)
  destination: string;

  @Column()
  @Field(() => Int)
  fee: number;

  @Column()
  @Field(() => String)
  transactionType: string;

  @Column()
  @Field(() => String)
  hash: string;

  @Column({ type: 'json', nullable: true })
  @Field(() => [String], { nullable: true })
  path: string[];

  @CreateDateColumn()
  createdAt: string;
}
