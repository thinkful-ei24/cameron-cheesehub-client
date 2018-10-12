import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cheeseReducer from './reducers/cheese';

const store = createStore(cheeseReducer, applyMiddleware(thunk));

export default store;