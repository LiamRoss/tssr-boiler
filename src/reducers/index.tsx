import { combineReducers } from 'redux';
import { worldReducer as world } from './WorldReducer';
import { Store } from '../store';

const reducers = combineReducers<Store.All>({
  // TODO: add reducers here.
  world
});

export { reducers };