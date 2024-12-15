import { Module } from '@nestjs/common';
import { TestService } from './test/test.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [TestService],
  exports: [TestService],
})
export class SharedModule {}