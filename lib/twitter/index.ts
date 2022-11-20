import { getTweet } from "./get-tweet";

export default function getTweetsMetadata(ids: string[]) {
  return Promise.all(ids.map((id) => getTweet(id)));
}

export const homepageTweets = [
  "1594089062545391617",
];
