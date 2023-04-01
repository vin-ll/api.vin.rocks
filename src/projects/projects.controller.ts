import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';

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
