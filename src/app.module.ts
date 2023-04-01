import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { SkillsModule } from './skills/skills.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProjectsModule, SkillsModule, UsersModule, AuthModule],
})
export class AppModule {}
