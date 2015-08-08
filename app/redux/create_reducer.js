module.exports = function createReducer(initialState, handlers) {
  const dispatcher = (state, action) => {
    return handlers[action.type] ?
      handlers[action.type](state, action.payload) :
      state;
  };

  const reducer = (state = initialState, action) => dispatcher(state, action);

  return reducer;
};
