import { FlowInputScraper, FlowInputScraperResponse  } from "../types/flowInputScraper";
import { handleResponse } from "./utils"

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";


export async function flowInputScraper(credentials: string): Promise<FlowInputScraper> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/flow/scraper`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });

  return handleResponse<FlowInputScraperResponse>(response).then((data) => data.data.flowInputScraper);
}