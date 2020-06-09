// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, Card } from 'semantic-ui-react';

// == Import
import CardYT from 'src/containers/CardYT';
import AppStyled from './AppStyled';


// == Composant
const App = ({ movies }) => {
  const handleFilterClick = (e) => {
    console.log('test');
  };
  return (
    <AppStyled>
      <h1>Test Particeep</h1>
      <Menu widths={1} className="filter-menu">
        <Menu.Item
          name='Categorie'
          // active={activeItem === 'categorie'}
          onClick={handleFilterClick}
        >
          Categorie
        </Menu.Item>
      </Menu>
      <Card.Group centered >
        {movies.map((movie) => (
          <CardYT 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            category={movie.category}
            likes={movie.likes}
            dislikes={movie.dislikes}
          />
        ))}
      </Card.Group>
    </AppStyled>
  );
};

App.propTypes = {
  movies: PropTypes.array.isRequired,
};


// == Export
export default App;
