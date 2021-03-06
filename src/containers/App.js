import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import App from 'src/components/App';

// Action Creators
import { filterByCategory, changeActiveCategories, changeActivePage } from 'src/actions/movies';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  filteredMovies: state.movies.filteredMovies,
  categories: state.categories.uniqueCategories,
  activeCategories: state.categories.activeCategories,
  activeStatePage: state.movies.activePage,
  moviesPerPage: state.movies.moviesPerPage,
  posterBackground: state.movies.posterBackground,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({
  filterByCategory: (category) => {
    dispatch(filterByCategory(category));
  },
  changeActiveCategories: (category) => {
    dispatch(changeActiveCategories(category));
  },
  changeActivePage: (number) => {
    dispatch(changeActivePage(number));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
