import { useState, useEffect } from "react";
import { httpClientPlugin as http } from "../config/plugins/http-client.plugin";
import { type Restaurant } from "../types";
import { apiUrl, queryBaseUrl } from "../constants/constants";

export const useFetchRestaurants = (searchQuery?: string) => {
  const url = apiUrl;
  const [data, setData] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const newUrl = !searchQuery ? url : url + queryBaseUrl + searchQuery;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await http.get(newUrl);
        if (Array.isArray(result)) {
          setData(result);
          setError(null);
        }
      } catch (error) {
        setError(error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return { data, loading, error };
};
