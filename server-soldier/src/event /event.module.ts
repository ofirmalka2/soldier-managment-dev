import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModel } from './event.model';
import { EventSchema } from './event.schema';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Event', schema: EventSchema }]),
    ],
    providers: [EventModel],
  })
  export class EventModule {}