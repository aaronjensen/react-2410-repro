const messages = require('app/reducers/messages_reducer');
const wizard = require('app/reducers/wizard_reducer');
const router = (state = {}, { type, payload }) =>
  type === 'SET_ROUTER' ?
    payload :
    state;

module.exports = {
  messages,
  wizard,
  router
};
