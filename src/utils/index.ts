import { useEffect, useState } from "react";

export const cleanObject = (obj: Object) => {
  const filteredEntries = Object.entries(obj).filter(
    ([key, value]) => value !== undefined && value !== ""
  );
  return Object.fromEntries(filteredEntries);
};
// use for loading page
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

//delays the search request while typing until completes
// ? mean you may pass or not a value
// export const useDebounce=(value: any, delay?: number)=>{
// uses generic types
export const useDebounce = <V>(value: V, delay?: number): V => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
