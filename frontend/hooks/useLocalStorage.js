import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(initialValue));
  });
  const setValue = (value) => {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [state, setValue];
};
export default useLocalStorage;
