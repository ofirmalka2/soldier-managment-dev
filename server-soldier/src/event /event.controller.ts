import { Controller, Get } from '@nestjs/common';
import { EventModel } from './event.model';

@Controller('soldiers')
export class EventController {
  constructor(private readonly eventService: EventModel) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.eventService.findAll();
  }
}