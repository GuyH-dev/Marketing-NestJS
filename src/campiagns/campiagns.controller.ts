import { CampaignsService } from './campaigns.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('campaigns')
export class CampiagnsController {
  constructor(private campaignService: CampaignsService) {}

  @Get(':campaignId')
  async getCampaignData(
    @Param('campaignId') campaignId: string,
  ): Promise<void> {
    await this.campaignService.getCampaingData(campaignId);
  }
}
