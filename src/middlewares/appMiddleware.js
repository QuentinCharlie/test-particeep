/* eslint-disable no-unused-vars, no-console */
// Action Types

const appMiddleware = (store) => (next) => (action) => {
  // console.log('appMiddleware laisse passer : ', action);


  // On passe au suivant
  next(action);
};

export default appMiddleware;
