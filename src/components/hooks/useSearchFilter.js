import { useState, useEffect, useRef } from "react";
import data from '../../data.json';

export function useSearchFilter(setFilteredMovies) {
  const isMounted = useRef(false);
  const [searchVal, setSearchVal] = useState();

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    const filteredResult = data.filter((movie) => movie.title.toLowerCase().includes(searchVal));
    setFilteredMovies(filteredResult);
  }, [searchVal]);

  return [searchVal, setSearchVal];
}
