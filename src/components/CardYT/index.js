// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Icon } from 'semantic-ui-react';

// == Import
import CardYTStyled from './CardYTStyled';

// == Composant
const CardYT = ({
  id,
  title,
  category,
  likes,
  dislikes,
  deleteMovie,
}) => {
  const handleClick = (e) => {
    const movieId = e.currentTarget.id;
    deleteMovie(movieId);
  };
  return (
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
          <div id={id} className="delete-button" onClick={handleClick}>
            <Button icon size="mini">
              <Icon name="close" color="red" />
            </Button>
          </div>
        </Card.Content>
        <Button circular icon="like" />
      </Card>
    </CardYTStyled>
  );
};

CardYT.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};


// == Export
export default CardYT;
