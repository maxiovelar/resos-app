import { useState, useEffect } from "react";
import { httpClientPlugin as http } from "../config/plugins/http-client.plugin";
import { type Restaurant } from "../types";
import { apiUrl, queryBaseUrl } from "../constants/constants";

export const useFetchRestaurants = (searchQuery?: string) => {
  const [data, setData] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const newUrl = !searchQuery
          ? apiUrl
          : apiUrl + queryBaseUrl + searchQuery;
        const result = await http.get(newUrl);

        if (Array.isArray(result)) {
          setData(result);
          setIsError(false);
        }
      } catch (error) {
        setIsError(true);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return { data, loading, isEmpty: data.length === 0, isError };
};
