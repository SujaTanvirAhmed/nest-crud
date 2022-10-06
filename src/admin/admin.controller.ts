/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('/admin')
export class AdminController {
  @Get()
  getAdmin(): string {
    return 'This is admin';
  }

  @Get('/name')
  getAdminName(): string {
    return 'This is admin name';
  }

  @Get('/id')
  getAdminId(): string {
    return 'This is admin Id';
  }
}
