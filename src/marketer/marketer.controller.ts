import { MarketerService } from './marketer.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('marketer')
export class MarketerController {
  constructor(private marketerService: MarketerService) {}

  @Get(':marketerId')
  getMarketerData(@Param('marketerId') marketerId: string): object {
    return this.marketerService.getMarketerData(marketerId);
  }
}
