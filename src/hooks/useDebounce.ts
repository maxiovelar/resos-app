import { useEffect, useState } from "react";

export const useDebounce = (inputValue: string, delay = 500) => {
  const [debouncedInputValue, setDebouncedInputValue] = useState(inputValue);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, delay);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue, delay]);

  return debouncedInputValue;
};
