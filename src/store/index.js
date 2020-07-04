import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import plants from './reducers/plants';

const rootReducer = combineReducers({ auth, plants });

export default createStore(rootReducer, applyMiddleware(thunk));