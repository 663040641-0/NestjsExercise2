import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from './entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() users: UsersEntity) {
    return this.usersService.create(users);
  }

  @Patch(':email')
  update(@Param('email') email: string, @Body() user: UsersEntity) {
    return this.usersService.update(email, user);
  }

  @Delete(':email')
  delete(@Param('email') email: string) {
    return this.usersService.delete(email);
  }
}
