import { Injectable } from '@nestjs/common';
import { OutbrainCampaignUrl, outBrainHeaders } from './marketer.costants';
import axios from 'axios';
import { isLessThanAWeekAgo, writeToCSV } from 'src/tools/tool';

@Injectable()
export class MarketerService {
  /**
   * Function that fetches campaigns data by specific marketer ID and runs outer functions
   * @param marketId
   */
  public async getMarketerData(marketId: string): Promise<void> {
    const resultData = await axios.get(
      `${OutbrainCampaignUrl}/${marketId}/campaigns`,
      outBrainHeaders,
    );
    this.lastWeekCampaigns(resultData.data.campaigns);
    this.above10USD(resultData.data.campaigns);
  }

  /**
   * Function that fetches all the campaigns from last week to an array and writes it as CSV
   * @param campaginsData
   */
  private lastWeekCampaigns(campaginsData) {
    const campaignsArray = [];
    campaginsData.forEach(campaign => {
      if (isLessThanAWeekAgo(campaign.creationTime)) {
        campaignsArray.push({
          id: campaign.id,
          name: campaign.name,
          creationTime: campaign.creationTime,
          budgetAmount: campaign.budget.amount,
          amountSpent: campaign.liveStatus.amountSpent,
        });
      }
    });
    writeToCSV(campaignsArray, 'Campaigns');
  }
  /**
   * Function that fetches all the campaigns with more than 10$ spent and writes it as CSV
   * @param campaignsData
   */
  private above10USD(campaignsData) {
    const campaignsArray = [];
    campaignsData.forEach(campaign => {
      const stringToNumber = parseFloat(campaign.liveStatus.amountSpent);
      if (stringToNumber >= 10) {
        campaignsArray.push(campaign);
      }
    });
    writeToCSV(campaignsArray, 'MoreThan10');
  }
}
