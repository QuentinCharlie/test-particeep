// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, Card, Dropdown, Pagination } from 'semantic-ui-react';

// == Import
import CardYT from 'src/containers/CardYT';
import AppStyled from './AppStyled';


// == Composant
const App = ({
  movies,
  filteredMovies,
  categories,
  activeCategories,
  filterByCategory,
  changeactiveCategories,
}) => {

  const handlePageChange = (e, value) => {
    const activePage = value.activePage;
  }

  const categoryOptions = categories.map((category) => ({
    key: category,
    text: category,
    value: category,
  }))

  const handleFilterChange = (e, { value }) => {
    filterByCategory(value);
    changeactiveCategories(value);
    
  }

  useEffect(() => {
    // si une categorie dans activeCategories n'existe plus dans uniqueCategories/categories
    // la supprimer d'activeCategories
    if (activeCategories.length > 0) {
      const updatedActiveCategoriesAfterDelete = activeCategories.filter((category) => categories.includes(category));
      changeactiveCategories(updatedActiveCategoriesAfterDelete);
    }
  }, [categories]);

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
          movies.map((movie) => (
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
        {activeCategories.length > 0 && (
          filteredMovies.map((movie) => (
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
      <Pagination defaultActivePage={1} totalPages={movies.length/4} siblingRange={5} onPageChange={handlePageChange} />
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
  filterByCategory: PropTypes.func.isRequired,
  changeactiveCategories: PropTypes.func.isRequired,
};

App.defaultProps = {
  filteredMovies: [],
}




// == Export
export default App;
