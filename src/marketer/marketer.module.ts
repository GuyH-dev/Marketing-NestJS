import { Module } from '@nestjs/common';
import { MarketerService } from './marketer.service';
import { MarketerController } from './marketer.controller';

@Module({
  providers: [MarketerService],
  controllers: [MarketerController]
})
export class MarketerModule {}
