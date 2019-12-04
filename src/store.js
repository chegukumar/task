import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';

import thunk from 'redux-thunk';


import loginReducer from './components/Auth/reducers';
import dashboardReducer from './components/Dashboard/reducers';


const reducer = combineReducers({
    login:loginReducer,
    dashboard:dashboardReducer
});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(
            // promise,
            thunk,
            // logger
        )
    )
);

export default store;