import { QueryFunction } from "@tanstack/query-core";
import { Track } from "../common/types";
import baseAPI from "./base";

export const searchQuery: QueryFunction<Track[]> = async ({ queryKey }) => {
  const term = queryKey[1];

  const { data } = await baseAPI.get("/search", {
    params: {
      limit: 20,
      media: "music",
      term,
    },
  });
  return data.results;
};
