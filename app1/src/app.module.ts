import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Feature1Module } from './feature1/feature1.module';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '@nestjsplus/shared/shared';

@Module({
  imports: [
    Feature1Module,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
