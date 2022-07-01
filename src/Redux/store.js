import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from "redux-thunk"
import {reducer as AppReducer} from './AppReducer/reducer'
import {reducer as AuthReducer} from './AuthReducer/reducer'



const  rootReducer=combineReducers({AppReducer,AuthReducer})
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=legacy_createStore(rootReducer,applyMiddleware(thunk))


export {store}