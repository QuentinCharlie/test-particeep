// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Icon } from 'semantic-ui-react';

// == Import
import CardYTStyled from './CardYTStyled';

// == Composant
const CardYT = ({
  movies,
  id,
  title,
  category,
  likes,
  dislikes,
  likedMovies,
  deleteMovie,
  updateCategories,
  changeLikeStatus,
}) => {
  const handleDeleteClick = () => {
    deleteMovie(id, category);

    const filteredMovies = movies.filter((movie) => movie.id !== id);
    console.log(filteredMovies);
    const categories = [];
    filteredMovies.map((movie) => categories.push(movie.category));
    const uniqueCategories = [...new Set(categories)];
    updateCategories(uniqueCategories);
  };
  const handleLikeClick = () => {
    changeLikeStatus(id);
  };
  return (
    <CardYTStyled>
      <Card>
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
          <div className="delete-button" onClick={handleDeleteClick}>
            <Button icon size="mini">
              <Icon name="close" color="red" />
            </Button>
          </div>
        </Card.Content>
        <Button className="like-button" circular onClick={handleLikeClick} color={likedMovies[Number(id)] === true ? 'red' : 'grey'}>
          <Icon name="like" />
        </Button>
      </Card>
    </CardYTStyled>
  );
};

CardYT.propTypes = {
  movies: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  likedMovies: PropTypes.object.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  updateCategories: PropTypes.func.isRequired,
  changeLikeStatus: PropTypes.func.isRequired,
};


// == Export
export default CardYT;
