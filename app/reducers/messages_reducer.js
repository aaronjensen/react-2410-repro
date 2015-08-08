const createReducer = require('app/redux/create_reducer');
const constants = require('app/constants');

const initialState = {
  info: undefined,
  error: undefined
};

function onRefreshFlashMessage() {
  return {};
}

module.exports = createReducer(initialState, {
  [constants.message.REFRESH_FLASH]: onRefreshFlashMessage
});
