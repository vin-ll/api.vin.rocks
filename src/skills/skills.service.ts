import { SkillModel } from './skills.model';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
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
}
