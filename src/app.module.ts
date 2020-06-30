import { CampaignsModule } from './campiagns/campiagns.module';
import { Module } from '@nestjs/common';
import { MarketerModule } from './marketer/marketer.module';

@Module({
  imports: [CampaignsModule, MarketerModule],
})
export class AppModule {}
