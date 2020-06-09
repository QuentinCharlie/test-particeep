// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Icon } from 'semantic-ui-react';

// == Import
import CardYTStyled from './CardYTStyled';

// == Composant
const CardYT = ({
  title,
  category,
  likes,
  dislikes,
}) => (
  <CardYTStyled>
    <Card color="red">
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{category}</Card.Meta>
        <Card.Description className="likes-count">
          <div className="likes">
            <Icon name="thumbs up" /> {likes}
          </div>
          <div className="dislikes">
            <Icon name="thumbs down" /> {dislikes}
          </div>
        </Card.Description>
        <div className="delete-button">
          <Button icon size="mini">
            <Icon name="close" color="red" />
          </Button>
        </div>
      </Card.Content>
      <Button circular icon="like" />
    </Card>
  </CardYTStyled>
);

CardYT.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
};


// == Export
export default CardYT;
