import { useState, useEffect, useRef } from "react";
import data from '../../data.json';

const dataGenres = data.map(movie => (movie.category).toLowerCase());
const defaultFilters = {};
for (const genre of dataGenres) {
  defaultFilters[genre] = false;
}

export function useGenreFilter({ setFilteredMovies, searchVal }) {
  const isMounted = useRef(false);
  const [genreFilter, setGenreFilter] = useState({ [`any genre`]: false, ...defaultFilters });

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    let selectedGenres = [];
    let filteredResult = [];

    if (!genreFilter['any genre']) {
      selectedGenres = Object.keys(genreFilter).filter(genre => genreFilter[genre]);
    }

    if (!selectedGenres['any genre'] && selectedGenres.length > 0) {
      selectedGenres = Object.keys(genreFilter).filter(genre => genreFilter[genre]);
      filteredResult = data.filter((movie) => selectedGenres.includes((movie.category).toLowerCase()) && searchVal && movie.title.toLowerCase().includes(searchVal));
    } else {
      filteredResult = data.filter((movie) => movie.title.toLowerCase().includes(searchVal));
    }

    setFilteredMovies(filteredResult);
  }, [genreFilter]);

  return [genreFilter, setGenreFilter];
}
