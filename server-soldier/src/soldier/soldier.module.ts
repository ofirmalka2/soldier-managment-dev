import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SoldierSchema } from './soldier.schema';
import { SoldierModel } from './soldier.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Soldier', schema: SoldierSchema }]),
  ],
  providers: [SoldierModel],
})
export class SoldierModule {}