/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UserModule,AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
