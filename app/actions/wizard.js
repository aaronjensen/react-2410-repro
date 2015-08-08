const constants = require('app/constants');

module.exports = {
  load(id, pageNumber = 0) {
    return (dispatch, getState) => {
      dispatch({ type: constants.wizard.LOAD, payload: { pageNumber } });

      let loaded = getState().wizard.loaded;
      if (loaded) {
        console.log('');
        return;
      }
      dispatch({ type: constants.wizard.LOAD_SUCCESS, payload: { id: "45" } });
      return;
    };
  },

  goToPage(id, pageNumber) {
    return (dispatch, getState) => {
      getState().router.transitionTo('wizardForm', { id, pageNumber });
    };
  }

};
