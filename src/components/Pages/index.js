// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, Dropdown } from 'semantic-ui-react';

// == Import
import PagesStyled from './PagesStyled';

// == Composant
const Pages = ({
  movies,
  filteredMovies,
  activeStatePage,
  moviesPerPage,
  changeActivePage,
  changeMoviesPerPage,

}) => {
  const handlePageChange = (e, value) => {
    const { activePage } = value;
    changeActivePage(activePage);
  };

  const moviesPerPageOptions = [
    {
      key: 4,
      text: 4,
      value: 4,
    },
    {
      key: 8,
      text: 8,
      value: 8,
    },
    {
      key: 12,
      text: 12,
      value: 12,
    },
  ];

  const handleMoviePerPageChange = (e, { value }) => {
    changeMoviesPerPage(value);
  };
  return (
    <PagesStyled>
      <Pagination
        className="pagination"
        activePage={activeStatePage}
        totalPages={
          filteredMovies.length === 0
            ? Math.ceil(movies.length / moviesPerPage)
            : Math.ceil(filteredMovies.length / moviesPerPage)
        }
        siblingRange={5}
        onPageChange={handlePageChange}
      />
      <span className="movie-per-page">
        Movies per page : {' '}
        <Dropdown
          inline
          options={moviesPerPageOptions}
          defaultValue={moviesPerPageOptions[0].value}
          onChange={handleMoviePerPageChange}
        />
      </span>
    </PagesStyled>
  );
};

Pages.propTypes = {
  movies: PropTypes.array.isRequired,
  filteredMovies: PropTypes.array.isRequired,
  activeStatePage: PropTypes.number.isRequired,
  moviesPerPage: PropTypes.number.isRequired,
  changeActivePage: PropTypes.func.isRequired,
  changeMoviesPerPage: PropTypes.func.isRequired,
};


// == Export
export default Pages;
