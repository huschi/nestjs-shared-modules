import { Controller, Get } from '@nestjs/common';
import { Service1Service } from './service1/service1.service';

@Controller('common')
export class CommonController {
  constructor(private readonly service1: Service1Service) {}

  @Get('getHello')
  getHello(): string {
    return this.service1.getHello();
  }
}
