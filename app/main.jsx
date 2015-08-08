const createStore = require('app/redux/create_app_store');
const routes = require('app/routes');
const createRouter = require('app/create_router');

const store = createStore();
const router = createRouter(routes, store);
