import { Controller, Get } from '@nestjs/common';
import { SoldierModel } from './soldier.model';

@Controller('soldiers')
export class SoldierController {
  constructor(private readonly soldierService: SoldierModel) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.soldierService.findAll();
  }
}