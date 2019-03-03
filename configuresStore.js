import {reduxThunk,logger} from './redux';
import {createStore,applyMiddleware} from './redux';
import Reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(
    reduxThunk,logger
)(createStore);

export default function configureStore(initialState){
    const store = createStoreWithMiddleware(Reducers, initialState);
    if(module.hot){
        module.hot.accept('./reducers/reducers', ()=>{
         const nextReducer = require('./reducers/reducer1');
         store.replaceReducer(nextReducer);
        });
    }
    return store;
}