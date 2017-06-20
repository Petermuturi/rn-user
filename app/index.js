import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers/reducer';
import App from './App';

const loggerMiddleware = createLogger({ predicate: (getState, action)=> __DEV__ });

function configureStore(initialState) {
	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
			),
		);

	return createStore(reducers, initialState, enhancer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

const store = configureStore({});

export default ()=> {
	return(
	<Provider store={store}>
		<App/>
	</Provider>
		)
}
