import { useEffect, useRef, useState } from "react";

const useSearchValue = <T = string>(initial: T) => {
  const timer = useRef<number>();

  const [value, setValue] = useState<T>(initial);
  const [search, setSearch] = useState<T>(initial);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer.current);
    }

    if (value === "") {
      return;
    }

    timer.current = setTimeout(() => {
      setSearch(value);
    }, 1000);
  }, [value]);

  return { value, search, setValue };
};

export default useSearchValue;
