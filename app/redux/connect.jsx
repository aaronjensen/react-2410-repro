const { connect: reduxConnect } = require('react-redux');

function defaultMerge(state, actions, props) {
  return {
    ...props,
    ...state,
    actions: {
      ...props.actions,
      ...actions
    }
  };
}

module.exports = function connect(
  select,
  actions,
  merge = defaultMerge) {
  return reduxConnect(select, actions, merge);
};
