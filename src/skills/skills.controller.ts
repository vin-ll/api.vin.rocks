import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  async getSkills(): Promise<{
    statusCode: number;
    message: string;
    data: any;
    error: string;
  }> {
    return this.skillsService.getSkills();
  }

  @UseGuards(AuthGuard)
  @Post()
  postSkill(
    @Body('name') name: string,
    @Body('type') type: string,
    @Body('use') use: string,
    @Body('dotColor') dotColor: string,
  ): Promise<{
    statusCode: number;
    message: string;
    data: {
      name: string;
      type: string;
      use: string;
      dotColor: string;
    };
    error: string;
  }> {
    return this.skillsService.postSkill(name, type, use, dotColor);
  }
}
