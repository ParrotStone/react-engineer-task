import { useState, useEffect } from "react";

import data from '../../data.json';

export function useRatingFilter({ setFilteredMovies, searchVal }) {
  const [ratingFilter, setRatingFilter] = useState({
    all: false,
    [`rating-1`]: false,
    [`rating-2`]: false,
    [`rating-3`]: false,
    [`rating-4`]: false,
    [`rating-5`]: false,
    [`rating-6`]: false,
    [`rating-7`]: false,
    [`rating-8`]: false,
    [`rating-9`]: false,
    [`rating-10`]: false
  });

  useEffect(() => {
    let selectedRatings = [];

    if (!ratingFilter['all'])
      selectedRatings = Object.keys(ratingFilter).filter(rating => ratingFilter[rating]).map(rating => Number(rating.split('-')[1]))

    if (selectedRatings.length > 0) {
      const filteredResult = data.filter((movie) => selectedRatings.includes(parseInt(movie.rating)));
      setFilteredMovies(filteredResult);
    } else {
      const filteredResult = data.filter((movie) => movie.title.toLowerCase().includes(searchVal));
      setFilteredMovies(filteredResult);
    }
  }, [ratingFilter, searchVal]);

  return [ratingFilter, setRatingFilter];
}
