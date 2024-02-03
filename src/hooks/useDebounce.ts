import { useEffect, useState } from "react";

export const useDebounce = (inputValue: string, delay = 500) => {
  if (delay < 0) {
    throw new Error("Delay must be greater than or equal to 0");
  }

  const [debouncedInputValue, setDebouncedInputValue] = useState(inputValue);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, delay);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue, delay]);

  return debouncedInputValue;
};
