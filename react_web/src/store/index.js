import {createStore,combineReducers,applyMiddleware} from 'redux';
import AuthReducer from './reducers/authReducer';
import thunk from 'redux-thunk';
import AuthMiddleware from './middleware/authmiddleware';


const middleware =applyMiddleware(thunk)

export {
   AuthMiddleware
}

 export const rootReducer = combineReducers({

  AuthReducer
 })
 export let store=createStore(
    rootReducer,
    middleware
    
)
