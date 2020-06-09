// == Import npm
import React from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';

// == Import
import CardYT from 'src/components/CardYT';
import AppStyled from './AppStyled';


// == Composant
const App = () => (
  <AppStyled>
    <h1>Test Particeep</h1>
    <Card.Group>
      <CardYT />
    </Card.Group>
  </AppStyled>
);

// == Export
export default App;
