const React = require('react');
const { Route } = require('react-router');

const App = require('app/components/app');
const WizardContainer = require('app/components/wizard/container');

module.exports = () => {
  return (
    <Route name="home" handler={App} path="/">
      <Route name="wizardForm" handler={WizardContainer} path="/main/?:pageNumber?" />
    </Route>
  );
};
