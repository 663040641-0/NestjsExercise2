import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersEntity } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly userRepo: Repository<UsersEntity>,
  ) {}

  create(users: UsersEntity) {
    const user = this.userRepo.create(users);
    return this.userRepo.insert(user);
  }

  findAll(): Promise<UsersEntity[] | null> {
    return this.userRepo.find();
  }

  update(email: string, user: UsersEntity) {
    return this.userRepo.update(email, user);
  }

  delete(email: string) {
    return this.userRepo.delete(email);
  }
}
