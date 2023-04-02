import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Delete,
} from '@nestjs/common';
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

  @Get(':id')
  async getSkill(@Param('id') id: string): Promise<{
    statusCode: number;
    message: string;
    data: {
      name: string;
      use: string;
      type: string;
      dotColor: string;
    };
    error: string;
  }> {
    return this.skillsService.getSkill(id);
  }

  @UseGuards(AuthGuard)
  @Put()
  async putSkill(
    @Body('id') id: string,
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
    return this.skillsService.putSkill(id, name, type, use, dotColor);
  }

  @UseGuards(AuthGuard)
  @Delete()
  async deleteSkill(@Body('id') id: string): Promise<{
    statusCode: number;
    message: string;
    error: string;
  }> {
    return this.skillsService.deleteSkill(id);
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
