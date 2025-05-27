import { Module } from '@nestjs/common';
import { UsersEntity } from './entities/users.entity';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from './users.providers'
import { UsersController } from './users.controller';

@Module({
  imports: [UsersModule, DatabaseModule, UsersEntity, UsersEntity],
  providers: [UsersService, ...usersProviders],
  controllers: [UsersController],
})
export class UsersModule {}
