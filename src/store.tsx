import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers';

// Export Store type.
export namespace Store {
    export type World = {
      name: string
    };
    export type All = {
        world: World
    };
}

// Create a middlewares array in order to push all middlewares independently.
// tslint:disable-next-line:no-any
const middlewares: any[] = [];

// Push each imported middleware to the middlewares array.
// TODO: push middleware to middlewares array

// Apply middlewares to middleware constant.
const middleware = applyMiddleware(...middlewares);

// Create store with devtools and middleware.
const store = createStore(reducers, composeWithDevTools( middleware ));

export { store };