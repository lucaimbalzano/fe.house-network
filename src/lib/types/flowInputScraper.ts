

export interface FlowInputScraper {
    id: string;
    totNumPage: string,
    totNumCards: string,
    contract: string,
    url: string,
    username: string,
    password: string,
    refreshSearch : {
        poolPage: string,
        poolCards: string,
        perTimeRange: string
    },
    message: Boolean,
    messageWebSite: Boolean
}
 

export interface FlowInputScraperResponse {
    status: string;
    data: {
      flowInputScraper: FlowInputScraper;
    };
  }
