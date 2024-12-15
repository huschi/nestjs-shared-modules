import { Module } from '@nestjs/common';
import { Service1Service } from './service1/service1.service';
import { CommonController } from './feature1.controller';
import { SharedModule } from '@nestjsplus/shared';

@Module({
  imports: [SharedModule],
  providers: [Service1Service],
  controllers: [CommonController],
})
export class Feature1Module {}
