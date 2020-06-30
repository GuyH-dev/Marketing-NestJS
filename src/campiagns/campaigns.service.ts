import { OutbrainCampaignUrl, outBrainHeaders } from './campaigns.constants';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { writeToFile } from 'src/tools/tool';

@Injectable()
export class CampaignsService {
  constructor() {}

  /**
   * Function that fetches campaign data by specific campaign ID and runs outer function
   * @param campaignId
   */
  async getCampaingData(campaignId: string): Promise<any> {
    const resultData = await axios.get(
      `${OutbrainCampaignUrl}/${campaignId}`,
      outBrainHeaders,
    );
    this.campaignDataToJson(resultData.data);
  }
  /**
   * Fuction that writes campaign data to JSON file
   * @param campaignData
   */
  campaignDataToJson(campaignData) {
    const jsonToString = JSON.stringify(campaignData);
    writeToFile(jsonToString, 'CampaignData', 'json');
  }
}
