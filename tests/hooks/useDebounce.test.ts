import { renderHook } from "@testing-library/react";
import { useDebounce } from "../../src/hooks/useDebounce";
describe("useDebounce.ts", () => {
  jest.useFakeTimers();
  test("should return debounced input value after the delay", () => {
    const inputValue = "test";
    const delay = 500;

    const { result } = renderHook(() => useDebounce(inputValue, delay));

    expect(result.current).toBe(inputValue);

    jest.advanceTimersByTime(delay);

    expect(result.current).toBe(inputValue);
  });

  test("should throw an error if delay is negative", () => {
    const inputValue = "test";
    const delay = -500;
    expect(() => useDebounce(inputValue, delay)).toThrow(
      "Delay must be greater than or equal to 0"
    );
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});
