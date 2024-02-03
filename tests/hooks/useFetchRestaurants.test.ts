import { renderHook, waitFor } from "@testing-library/react";
import { useFetchRestaurants } from "../../src/hooks/useFetchRestaurants";
import { httpClientPlugin as http } from "../../src/config/plugins/http-client.plugin";
import { apiUrl, queryBaseUrl } from "../../src/constants/constants";

describe("useFetchRestaurants.ts", () => {
  const mockGet = jest.fn();
  http.get = mockGet;

  test("should fetch restaurants successfully", () => {
    const mockData = [{ id: 1, name: "Test Restaurant" }];
    const { result } = renderHook(() => useFetchRestaurants());

    mockGet.mockResolvedValueOnce(mockData);
    expect(mockGet).toHaveBeenCalledWith(apiUrl);

    waitFor(() => {
      expect(result.current.data).toEqual(mockData);
      expect(result.current.loading).toBe(false);
      expect(result.current.isError).toBe(false);
    });
  });

  test("should fetch data from API with searchQuery when provided", () => {
    const searchQuery = "pizza";
    const mockData = [{ id: 2, name: "Pizza Place" }];
    const { result } = renderHook(() => useFetchRestaurants(searchQuery));

    expect(mockGet).toHaveBeenCalledWith(apiUrl + queryBaseUrl + searchQuery);
    mockGet.mockResolvedValueOnce(mockData);
    waitFor(() => expect(result.current.data).toEqual(mockData));
  });

  test("should handle fetch error", () => {
    const { result } = renderHook(() => useFetchRestaurants());

    mockGet.mockRejectedValueOnce(new Error("An error occurred"));

    waitFor(() => {
      expect(result.current.data).toEqual([]);
      expect(result.current.loading).toBe(false);
      expect(result.current.isError).toBe(true);
    });
  });

  test("should be loading promise is resolving", () => {
    const { result } = renderHook(() => useFetchRestaurants());

    mockGet.mockRejectedValueOnce(new Error("An error occurred"));

    expect(result.current.loading).toBe(true);
  });
});
