import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "nx3wx05v",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-04-06",
};

export const client = createClient(config);
