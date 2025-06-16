import axios from "axios";
//import { ImageResult } from "../types";

const ACCESS_KEY = "8YUKB2KYb8l-Sn0ibgXsbqHbGXhWTizQm6zvfasOX5M";

interface FetchResponse {
  //results: ImageResult[];
  total: number;
  total_pages: number;
}

export const fetchArticles = async (
  query: string,
  page: number
): Promise<FetchResponse> => {
  const response = await axios.get<FetchResponse>(
    `https://api.unsplash.com/search/photos`,
    {
      params: {
        query,
        page,
        per_page: 15,
        client_id: ACCESS_KEY,
      },
    }
  );

  return response.data;
};
