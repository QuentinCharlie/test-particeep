// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Icon } from 'semantic-ui-react';

// == Import
import CardYT from 'src/components/CardYT';
import AppStyled from './AppStyled';


// == Composant
const App = ({ movies }) => (
  <AppStyled>
    <h1>Test Particeep</h1>
    <Card.Group>
      {movies.map((movie) => (
        <CardYT 
          key={movie.id}
          title={movie.title}
          category={movie.category}
          likes={movie.likes}
          dislikes={movie.dislikes}
        />
      ))}
    </Card.Group>
  </AppStyled>
);

App.propTypes = {
  movies: PropTypes.array.isRequired,
};


// == Export
export default App;
