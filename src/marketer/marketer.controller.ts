import { MarketerService } from './marketer.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('marketer')
export class MarketerController {
  constructor(private marketerService: MarketerService) {}

  @Get(':marketerId')
  async getMarketerData(
    @Param('marketerId') marketerId: string,
  ): Promise<void> {
    await this.marketerService.getMarketerData(marketerId);
  }
}
