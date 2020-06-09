// == Import npm
import React from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';

// == Import
import CardYTStyled from './CardYTStyled';

// == Composant
const CardYT = () => (
  <CardYTStyled>
    <Card color="red">
      <Card.Content>
        <Card.Header>Oceans 8</Card.Header>
        <Card.Meta>Comedy</Card.Meta>
        <Card.Description className="likes-count">
          <div className="likes">
            <Icon name="thumbs up" /> 11 
          </div>
          <div className="dislikes">
            <Icon name="thumbs down" /> 9
          </div>
        </Card.Description>
        <Button circular icon="like" />
      </Card.Content>
    </Card>
  </CardYTStyled>
);

// == Export
export default CardYT;
