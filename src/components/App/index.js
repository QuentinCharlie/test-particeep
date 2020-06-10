// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Dropdown } from 'semantic-ui-react';

// == Import
import CardYT from 'src/containers/CardYT';
import Pages from 'src/containers/Pages';
import AppStyled from './AppStyled';


// == Composant
const App = ({
  movies,
  filteredMovies,
  categories,
  activeCategories,
  activeStatePage,
  moviesPerPage,
  filterByCategory,
  changeActiveCategories,
}) => {

  const categoryOptions = categories.map((category) => ({
    key: category,
    text: category,
    value: category,
  }))

  const handleFilterChange = (e, { value }) => {
    filterByCategory(value);
    changeActiveCategories(value);    
  }

  useEffect(() => {
    // Delete a category if said category cant be found anymore in uniqueCategories in state
    if (activeCategories.length > 0) {
      const updatedActiveCategoriesAfterDelete = activeCategories.filter((category) => categories.includes(category));
      changeActiveCategories(updatedActiveCategoriesAfterDelete);
    }
  }, [categories]);

  function paginate(array, itemsPerPage, pageNumber) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);
  }

  return (
    <AppStyled>
      <h1>Test Particeep</h1>

      <Dropdown
        className="filter-menu"
        placeholder='Categories'
        fluid
        multiple
        selection
        options={categoryOptions}
        onChange={handleFilterChange}
      />

      <Card.Group centered className="cards">
        {(activeCategories.length === 0 || filteredMovies.length === 0) && (
          paginate(movies, moviesPerPage, activeStatePage).map((movie) =>  (
            <CardYT 
              key={movie.id}
              id={movie.id}
              title={movie.title}
              category={movie.category}
              likes={movie.likes}
              dislikes={movie.dislikes}
            />
          )
        ))}
        {activeCategories.length > 0 && (
          paginate(filteredMovies, moviesPerPage, activeStatePage).map((movie) => (
            <CardYT 
              key={movie.id}
              id={movie.id}
              title={movie.title}
              category={movie.category}
              likes={movie.likes}
              dislikes={movie.dislikes}
            />
          ))
        )}
        
      </Card.Group>
      <Pages />
    </AppStyled>
  );
};

App.propTypes = {
  movies: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  activeCategories: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  activeStatePage: PropTypes.number.isRequired,
  moviesPerPage: PropTypes.number.isRequired,
  filterByCategory: PropTypes.func.isRequired,
  changeActiveCategories: PropTypes.func.isRequired,
};

App.defaultProps = {
  filteredMovies: [],
}




// == Export
export default App;
