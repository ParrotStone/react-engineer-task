import { useState, useEffect } from "react";
import data from './data.json';

const isMounted = useRef(false);

const dataGenres = data.map(movie => (movie.category).toLowerCase());
const defaultFilters = {};
for (const genre of dataGenres) {
  defaultFilters[genre] = false;
}

function useFilters() {
  const [searchVal, setSearchVal] = useState();
  const [genreFilters, setGenreFilters] = useState({ [`any genre`]: false, ...defaultFilters });

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    let selectedGenres = [];
    let filteredResult = [];


    if (!genreFilters['any genre']) {
      selectedGenres = Object.keys(genreFilters).filter(genre => genreFilters[genre])
    }

    if (!selectedGenres['any genre'] && selectedGenres.length > 0) {
      selectedGenres = Object.keys(genreFilters).filter(genre => genreFilters[genre]);

      filteredResult = data.filter((movie) => movie.title.toLowerCase().includes(searchVal) && selectedGenres.includes((movie.category).toLowerCase()));
    } else {
      filteredResult = data.filter((movie) => movie.title.toLowerCase().includes(searchVal));
    }

    setFilteredMovies(filteredResult);
  }, [searchVal, ratingFilters, genreFilters]);

  useEffect(() => {
    let selectedRatings = [];

    if (!ratingFilters['all'])
      selectedRatings = Object.keys(ratingFilters).filter(rating => ratingFilters[rating]).map(rating => Number(rating.split('-')[1]))

    if (!selectedRatings.length == 0) {
      const filteredResult = data.filter((movie) => selectedRatings.includes(parseInt(movie.rating)));
      setFilteredMovies(filteredResult);
    }
  }, [ratingFilters]);

  return
}

export default useFilters;