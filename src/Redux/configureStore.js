import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './Reducer';
import ReduxImmutableStateVariant  from 'redux-immutable-state-invariant'

export default function configureStore(intialState){
 const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose   
 return createStore(rootReducer, intialState, composeEnhancer(applyMiddleware(ReduxImmutableStateVariant())))
}