import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamModel } from './team.model';
import { TeamSchema } from './team.schema';


@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Team', schema: TeamSchema }]),
    ],
    providers: [TeamModel],
  })
  export class TeamModule {}