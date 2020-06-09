// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, Card } from 'semantic-ui-react';

// == Import
import CardYT from 'src/containers/CardYT';
import AppStyled from './AppStyled';


// == Composant
const App = ({
  movies,
  filteredMovies,
  categories,
  activeCategory,
  filterByCategory,
  changeActiveCategory,
}) => {
  useEffect(() => {
    filterByCategory('all');
    changeActiveCategory('all');
  }, [filteredMovies.length === 0]);
  
  const handleFilterClick = (e) => {
    const categoryClicked = e.currentTarget.dataset.category;
    if (activeCategory === categoryClicked) {
      filterByCategory('all');
      changeActiveCategory('all');
    }
    else {
      filterByCategory(categoryClicked);
      changeActiveCategory(categoryClicked);
    }
  };

  return (
    <AppStyled>
      <h1>Test Particeep</h1>
      <Menu inverted pointing widths={categories.length + 1} className="filter-menu">
        <Menu.Item
          key="all"
          active={activeCategory === 'all'}
          data-category="all"
          onClick={handleFilterClick}
        >
          All categories
        </Menu.Item>
        {categories.map((category) => (
        <Menu.Item
          key={category}
          active={activeCategory === category}
          data-category={category}
          onClick={handleFilterClick}
        >
          {category}
        </Menu.Item>
        ))}
      </Menu>
      <Card.Group centered >
        {activeCategory === 'all' && (
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
        {activeCategory !== 'all' && (
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
    </AppStyled>
  );
};

App.propTypes = {
  movies: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  activeCategory: PropTypes.string.isRequired,
  filterByCategory: PropTypes.func.isRequired,
  changeActiveCategory: PropTypes.func.isRequired,
};

App.defaultProps = {
  filteredMovies: [],
}




// == Export
export default App;