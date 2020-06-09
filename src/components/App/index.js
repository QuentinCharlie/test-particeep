// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Input } from 'semantic-ui-react';

// == Import
import CardYT from 'src/containers/CardYT';
import AppStyled from './AppStyled';


// == Composant
const App = ({ movies }) => {
  const handleChange = (e) => {
    // changeInputValue(e.target.value);
  };
  return (
    <AppStyled>
      <h1>Test Particeep</h1>
      <Input
          autoFocus
          placeholder="Recherche..."
          icon="search"
          onChange={handleChange}
          className="input"
      />
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
