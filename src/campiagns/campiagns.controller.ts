import { CampaignsService } from './campaigns.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('campaigns')
export class CampiagnsController {
  constructor(private campaignService: CampaignsService) {}

  @Get(':campaignId')
  getCampaignData(@Param('campaignId') campaignId: string): object {
    return this.campaignService.getCampaingData(campaignId);
  }
}
