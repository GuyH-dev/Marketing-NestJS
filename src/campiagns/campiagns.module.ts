import { Module } from '@nestjs/common';
import { CampiagnsController } from './campiagns.controller';
import { CampaignsService } from './campaigns.service';

@Module({
  controllers: [CampiagnsController],
  providers: [CampaignsService],
})
export class CampaignsModule {}
