import { createClient } from "contentful";

export const client = createClient({
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
  space: process.env.CF_SPACE_ID,
});

type GetPostsParams = {
  contentType: string;
};

export async function getPosts({ contentType }: GetPostsParams) {
  const query = {
    content_type: contentType,
    limit: 10,
  };
  const res = await client.getEntries(query);
  return res.items || null;
}
