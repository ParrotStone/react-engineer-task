import { useState, useEffect, useRef } from 'react';
import { useSearchFilter } from './components/hooks/useSearchFilter';
import { useRatingFilter } from './components/hooks/useRatingFilter';
import { useGenreFilter } from './components/hooks/useGenreFilter';
import './App.css'
import Input from './components/Input'
import Dropdown from './components/Dropdown';
import { StyledDropdownItem } from './components/styled/DropdownItem';
import StarsComponent from './components/StarsComponent';
import { StyledAutoComplete, StyledAutoCompleteItem } from './components/styled/AutoComplete.styled';

function App() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchVal, setSearchVal] = useSearchFilter(setFilteredMovies);
  const filters = { setFilteredMovies, searchVal };
  const [ratingFilter, setRatingFilter] = useRatingFilter(filters);
  const [genreFilter, setGenreFilter] = useGenreFilter(filters);

  return (
    <div className="App">
      <Input label='Enter a movie name' value={searchVal} setValue={setSearchVal} />
      {filteredMovies.length > 0 && (
        <StyledAutoComplete>
          {filteredMovies.map((movie, idx) => (
            <StyledAutoCompleteItem key={movie.title}>
              <div>
                <strong>
                  {movie.title}
                </strong>
                <p>
                  {movie.category}
                </p>
              </div>
              <StarsComponent numOfStars={movie.rating} />
            </StyledAutoCompleteItem>
          ))}
        </StyledAutoComplete>
      )}

      <Dropdown label="Rating">
        <StyledDropdownItem>
          <input type="checkbox" name="all" checked={ratingFilter['all']} style={{ marginRight: '.8rem' }} onChange={() => setRatingFilter({ ...ratingFilter, all: !ratingFilter['all'] })} />
          <label>
            Any rating
          </label>
        </StyledDropdownItem>
        {Array(10).fill(1).map((row, index) => (
          <StyledDropdownItem key={index}>
            <input type="checkbox" name={`rating-${index + 1}`} checked={ratingFilter[`rating-${index + 1}`]} onChange={({ target }) => setRatingFilter({ ...ratingFilter, [target.name]: !ratingFilter[`rating-${index + 1}`] })} />
            <StarsComponent numOfStars={index + 1} />
          </StyledDropdownItem>
        ))}

      </Dropdown>
      <Dropdown label="Genre">
        {Object.keys(genreFilter).map((genre, index) => (
          <StyledDropdownItem key={genre}>
            <input type="checkbox" name={`genre-${index + 1}`} checked={genreFilter[genre]} onChange={() => setGenreFilter({ ...genreFilter, [genre]: !genreFilter[genre] })} style={{ marginRight: '.8rem' }} />
            <p>{genre}</p>
          </StyledDropdownItem>
        ))}
      </Dropdown>
    </div>
  )
}

export default App
