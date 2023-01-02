import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setdarkMode] = useLocalStorage("darkMode", initialValue);
  return [darkMode, setdarkMode];
};

export default useDarkMode;
