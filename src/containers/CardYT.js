import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import CardYT from 'src/components/CardYT';

// Action Creators
import { deleteMovie } from 'src/actions/movies';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  movies: state.movies,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  deleteMovie: (id) => {
    dispatch(deleteMovie(id));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const CardYTContainer = connect(mapStateToProps, mapDispatchToProps)(CardYT);

export default CardYTContainer;
