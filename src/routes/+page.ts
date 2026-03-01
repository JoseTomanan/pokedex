import type { PageLoad } from "./$types";

import { BASE_FETCH_LINK, MAX_COUNT } from "@/constants";
import type { NameIdPair } from "@/types";
import { getIdFromUrl } from "@/utils";



export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch(`${BASE_FETCH_LINK}/?offset=0&limit=${MAX_COUNT}`);
  const data = await response.json();

  const nameIdPairs: NameIdPair[] = [];

  for (const item of data.results)
    nameIdPairs.push({...item, id: Number(getIdFromUrl(item.url))} as NameIdPair);

  return { nameIdPairs };
}