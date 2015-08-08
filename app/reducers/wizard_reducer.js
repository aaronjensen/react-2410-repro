const createReducer = require('app/redux/create_reducer');

const constants = require('app/constants');

function initialValues() {
  return {
    referral: {},
    loaded: false,
    currentPage: 0
  };
}

function onLoad(state, { pageNumber }) {
  return { ...state, currentPage: pageNumber || 0 };
}

function onLoadSuccess(state, referral) {
  return { ...state, referral, loaded: true };
}

module.exports = createReducer(initialValues(), {
  [constants.wizard.LOAD]: onLoad,
  [constants.wizard.LOAD_SUCCESS]: onLoadSuccess
});
