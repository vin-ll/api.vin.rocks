import { SkillModel } from './skills.model';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import skillSchema from '../database/skill.schema';

@Injectable()
export class SkillsService {
  async postSkill(name: string, type: string, use: string, dotColor: string) {
    if (!name || !type || !use || !dotColor) {
      throw new BadRequestException('Invalid body');
    }

    const skill = new SkillModel(name, type, use, dotColor);

    await skillSchema.create(skill).catch(() => {
      throw new InternalServerErrorException();
    });

    return {
      statusCode: 200,
      message: 'Skill successfully created',
      data: skill,
      error: 'none',
    };
  }

  async getSkills() {
    const skills = await skillSchema.find({});

    return {
      statusCode: 200,
      message: 'Skills successfully fetched',
      data: skills,
      error: 'none',
    };
  }

  async getSkill(id: string) {
    const skill = await skillSchema.findOne({ _id: id });
    if (!skill) {
      throw new NotFoundException('Skill does not exist');
    }
    return {
      statusCode: 200,
      message: 'Skill successfully fetched',
      data: skill,
      error: 'none',
    };
  }

  async putSkill(
    id: string,
    name: string,
    type: string,
    use: string,
    dotColor: string,
  ) {
    if (!id || !name || !use || !type || !dotColor) {
      throw new BadRequestException('Invalid body');
    }

    const skill = new SkillModel(name, use, type, dotColor);

    await skillSchema.updateOne({ _id: id }, skill).catch(() => {
      throw new NotFoundException('Skill does not exist');
    });

    return {
      statusCode: 200,
      message: 'Skill successfully updated',
      data: skill,
      error: 'none',
    };
  }
}
