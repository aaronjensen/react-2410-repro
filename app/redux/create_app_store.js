const { createStore, combineReducers, applyMiddleware, compose } = require('redux');
const reducers = require('app/reducers');
const thunkMiddleware = require('redux-thunk');

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware),
  createStore
);

module.exports = function createAppStore(initialState = {}) {
  return finalCreateStore(combineReducers(reducers), initialState);
};
