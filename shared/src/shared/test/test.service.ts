import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TestService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    const env1 = this.configService.get<string>("ENV_1");
    return env1;
  }
}
