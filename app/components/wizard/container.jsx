const Wizard = require('app/components/wizard');

const { connect } = require('react-redux');
const actions = require('app/actions/wizard');

function select(state) {
  return {
    ...state.wizard,
    messages: state.messages
  };
}

module.exports = connect(
  select,
  actions
)(Wizard);
