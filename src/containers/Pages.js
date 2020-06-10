import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Pages from 'src/components/Pages';

// Action Creators
import { changeActivePage, changeMoviesPerPage } from 'src/actions/movies';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  filteredMovies: state.movies.filteredMovies,
  activeStatePage: state.movies.activePage,
  moviesPerPage: state.movies.moviesPerPage,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({
  changeActivePage: (page) => {
    dispatch(changeActivePage(page));
  },
  changeMoviesPerPage: (number) => {
    dispatch(changeMoviesPerPage(number));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const PagesContainer = connect(mapStateToProps, mapDispatchToProps)(Pages);

export default PagesContainer;
