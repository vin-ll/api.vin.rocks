import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ProjectModel } from './projects.model';
import projectSchema from '../database/project.schema';

@Injectable()
export class ProjectsService {
  async postProject(
    name: string,
    description: string,
    link: string,
    dotColor: string,
    language: string,
  ) {
    if (!name || !description || !link || !dotColor || !language) {
      throw new BadRequestException('Invalid body');
    }

    const project = new ProjectModel(
      name,
      description,
      link,
      dotColor,
      language,
    );

    await projectSchema.create(project).catch((e) => {
      console.log(e);
      throw new InternalServerErrorException();
    });

    return {
      statusCode: 200,
      message: 'Project successfully created',
      data: project,
      error: 'none',
    };
  }

  async getProjects() {
    const projects = await projectSchema.find({});

    return {
      statusCode: 200,
      message: 'Projects successfully fetched',
      data: projects,
      error: 'none',
    };
  }

  async getProject(id: string) {
    const project = await projectSchema.findOne({ _id: id });
    if (!project) {
      throw new NotFoundException('Project does not exist');
    }
    return {
      statusCode: 200,
      message: 'Project successfully fetched',
      data: project,
      error: 'none',
    };
  }
}
