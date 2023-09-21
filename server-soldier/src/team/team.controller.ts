import { Controller, Get } from '@nestjs/common';
import { TeamModel } from './team.model';

@Controller('soldiers')
export class TeamController {
  constructor(private readonly teamService: TeamModel) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.teamService.findAll();
  }
}