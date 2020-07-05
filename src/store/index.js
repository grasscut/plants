import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import plants from './reducers/plants';
import divisions from './reducers/divisions';

const rootReducer = combineReducers({ auth, plants, divisions });

export default createStore(rootReducer, applyMiddleware(thunk));