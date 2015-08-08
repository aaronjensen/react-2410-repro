const React = require('react');

const WizardPage0 = React.createClass({
  render() {
    return (
      <form method="post" onSubmit={this.props.onSubmit}>
        Click Next<br/>
        <input />
          <button>Next</button>
      </form>
    );
  }

});

module.exports = WizardPage0;
