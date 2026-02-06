import { Controller, Get } from '@nestjs/common';
import { AppService, IUsers } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('get_user')
  getUser(data: any): IUsers | undefined {
    const user = this.appService.getUser(data);
    console.log({ user });
    return user;
  }
}
