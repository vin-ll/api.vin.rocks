import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async getProjects(): Promise<{
    statusCode: number;
    message: string;
    data: any;
    error: string;
  }> {
    return this.projectsService.getProjects();
  }

  @Get(':id')
  async getProject(@Param('id') id: string): Promise<{
    statusCode: number;
    message: string;
    data: {
      name: string;
      description: string;
      link: string;
      dotColor: string;
      language: string;
    };
    error: string;
  }> {
    return this.projectsService.getProject(id);
  }

  @UseGuards(AuthGuard)
  @Delete()
  async deleteProject(@Body('id') id: string): Promise<{
    statusCode: number;
    message: string;
    error: string;
  }> {
    return this.projectsService.deleteProject(id);
  }

  @UseGuards(AuthGuard)
  @Put()
  async putProject(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('link') link: string,
    @Body('dotColor') dotColor: string,
    @Body('language') language: string,
  ): Promise<{
    statusCode: number;
    message: string;
    data: {
      name: string;
      description: string;
      link: string;
      dotColor: string;
      language: string;
    };
    error: string;
  }> {
    return this.projectsService.putProject(
      id,
      name,
      description,
      link,
      dotColor,
      language,
    );
  }

  @UseGuards(AuthGuard)
  @Post()
  async postProject(
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('link') link: string,
    @Body('dotColor') dotColor: string,
    @Body('language') language: string,
  ): Promise<{
    statusCode: number;
    message: string;
    data: {
      name: string;
      description: string;
      link: string;
      dotColor: string;
      language: string;
    };
    error: string;
  }> {
    return this.projectsService.postProject(
      name,
      description,
      link,
      dotColor,
      language,
    );
  }
}
