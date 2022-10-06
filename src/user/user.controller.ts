/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Delete, Put, Patch } from '@nestjs/common';

@Controller('/user')
export class UserController {
  @Get()
  getUser(): string {
    return 'This is user';
  }

  @Get('/name')
  getUserName(): string {
    return 'This is username';
  }

  @Get('/id')
  getUserId(): string {
    return 'This is user id';
  }

  @Post()
  createUser(): string {
    return 'User created';
  }

  @Delete()
  deleteUser(): string {
    return 'User deleted';
  }

  @Put()
  putUser(): string {
    return 'User put';
  }

  @Patch()
  patchUser(): string {
    return 'User patched';
  }
}
