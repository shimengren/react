import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default function configureStore(initialState){
    const store = createStoreWithMiddleware(Reducers, initialState);
    if(module.hot){
        module.hot.accept('./reducers/reducers', ()=>{
         const nextReducer = require('./reducers/reducers');
         store.replaceReducer(nextReducer);
        });
    }
    return store;
}