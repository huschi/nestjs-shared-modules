import { Injectable } from '@nestjs/common';
import { TestService } from '@nestjsplus/shared/shared';

@Injectable()
export class Service1Service {
  constructor(private readonly testService: TestService) {}

  getHello(): string {
    return this.testService.getHello();
  }
}
