import { FlowInputScraper, FlowInputScraperResponse  } from "../types/flowInputScraper";
import { handleResponse } from "./utils"

const SERVER_ENDPOINT = "http://127.0.0.1:8000";


export async function FlowInputScraperPush(credentials: string): Promise<FlowInputScraper> {
  const allowedOrigins = process.env.NODE_ENV === 'production' ? ['https://www.site.com'] : ['http://localhost:3000', 'http://127.0.0.1:8000']

  const response = await fetch(`${SERVER_ENDPOINT}/api/scraper/config`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });
  console.log('response: '+response)
  return handleResponse<FlowInputScraperResponse>(response).then((data) => data.data.flowInputScraper);
}