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
  poster,
  likedMovies,
  deleteMovie,
  updateCategories,
  changeLikeStatus,
  setBackgroundPoster,
  removeBackgroundPoster,
}) => {
  const handleDeleteClick = () => {
    deleteMovie(id, category);

    const filteredMovies = movies.filter((movie) => movie.id !== id);
    const categories = [];
    filteredMovies.map((movie) => categories.push(movie.category));
    const uniqueCategories = [...new Set(categories)];
    updateCategories(uniqueCategories);
  };
  const handleLikeClick = () => {
    changeLikeStatus(id);
  };
  const handleMouseEnter = () => {
    setBackgroundPoster(poster);
  };
  const handleMouseLeave = () => {
    removeBackgroundPoster();
  };
  return (
    <CardYTStyled>
      <Card>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{category}</Card.Meta>

          <div className="like-bar">
            <span
              className="green-bar"
              style={{ width: `${likes / (likes + dislikes) * 100}%` }}
            />
            <span
              className="red-bar"
              style={{ width: `${dislikes / (likes + dislikes) * 100}%` }}
            />
          </div>

          <Card.Description className="likes-count">
            <div className="likes">
              <Icon name="thumbs up" /> {likes}
            </div>
            <div className="dislikes">
              <Icon name="thumbs down" /> {dislikes}
            </div>
          </Card.Description>

          <div
            className="hover-button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Button icon basic size="mini">
              <Icon name="eye" color="blue" />
            </Button>
          </div>

          <div className="delete-button" onClick={handleDeleteClick}>
            <Button icon size="mini">
              <Icon name="close" color="red" />
            </Button>
          </div>
        </Card.Content>
        <Button
          className="like-button"
          onClick={handleLikeClick}
          color={likedMovies[Number(id)] === true ? 'red' : 'grey'}
        >
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
  poster: PropTypes.string.isRequired,
  likedMovies: PropTypes.object.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  updateCategories: PropTypes.func.isRequired,
  changeLikeStatus: PropTypes.func.isRequired,
  setBackgroundPoster: PropTypes.func.isRequired,
  removeBackgroundPoster: PropTypes.func.isRequired,
};

// == Export
export default CardYT;
