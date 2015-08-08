const React = require('react');
const Router = require('react-router');
const { Provider } = require('react-redux');
const { refreshFlash } = require('app/actions/message');

function createRouter(routes, store) {
  return Router.run(routes(), Router.HistoryLocation, function(Handler, state) {

    // NOTE: Removing this line prevents the error
    store.dispatch(refreshFlash());

    store.dispatch({ type: 'SET_ROUTER', payload: this });

    let handler = (
      <Provider store={store}>
        {() => <Handler routerState={state} />}
      </Provider>
    );
    React.render(handler, document.body);
  });
}

module.exports = createRouter;
