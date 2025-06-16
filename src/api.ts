import axios from "axios";

const ACCESS_KEY = "8YUKB2KYb8l-Sn0ibgXsbqHbGXhWTizQm6zvfasOX5M";

interface Article {
  id: string;
  urls: {
    small: string;
  };
  description?: string;
  alt_description?: string;
}

interface FetchResponse {
  results: Article[];
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
