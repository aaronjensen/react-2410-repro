const React = require('react');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;

const App = React.createClass({
  render() {
    return <RouteHandler {...this.props} />;
  }
});

module.exports = App;
