import { act, renderHook } from "@testing-library/react";
import { useScrollPosition } from "../../src/hooks/useScrollPosition";

describe("useScrollPosition.ts", () => {
  test("should return initial scroll position as 0", () => {
    const { result } = renderHook(() => useScrollPosition());
    expect(result.current).toBe(0);
  });

  test("should update scroll position on window scroll", () => {
    const { result } = renderHook(() => useScrollPosition());

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(100);
  });

  test("cleans up the event listener on unmount", () => {
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() => useScrollPosition());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function)
    );
  });
});
