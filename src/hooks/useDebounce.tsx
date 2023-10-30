"use client";
import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (typeof value !== "undefined") {
      const timeoutId = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [value, delay]);

  return debouncedValue;
}