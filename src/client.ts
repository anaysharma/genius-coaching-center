import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "nx3wx05v",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-04-06"
}
const client = createClient(config);

export async function getNews() {
  const news = await client.fetch("*[_type == 'document']");
  return news;
}

export async function getReviews() {
  const reviews = await client.fetch('*[title=="Review"]');
  return reviews;
}