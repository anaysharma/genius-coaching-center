import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "nx3wx05v",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-04-06"
}

export const client = createClient(config);

// export async function getNews() {
//   const news = await client.fetch(`*[_type == "news"] {
//     _id,
//     title,
//     "content": content[0].children[0].text
//   }
// `);
//   console.log(news)
//   return news;
// }

// export async function getReviews() {
//   const reviews = await client.fetch('*[title=="Review"]');
//   return reviews;
// }