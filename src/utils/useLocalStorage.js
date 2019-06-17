import React from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = React.useState(() => {
    if (typeof window !== `undefined`) {
      return window.localStorage.getItem(key) || initialValue;
    }
    return initialValue;
  });

  React.useEffect(() => {
    if (typeof window !== `undefined`) {
      window.localStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue];
}
