import {createStore,combineReducers,applyMiddleware, compose} from 'redux';
import AuthReducer from './reducers/authReducer';
import AdReducer from './reducers/adReducer';
import MsgReducer from './reducers/msgReducer';
import thunk from 'redux-thunk';
import AuthMiddleware from './middleware/authmiddleware';
import AdMiddleware from './middleware/admiddleware';
import MsgMiddleware from './middleware/msgmiddleware';





const middleware =applyMiddleware(thunk)

export {
   AuthMiddleware,
   AdMiddleware,
   MsgMiddleware
   
}
 
 export const rootReducer = combineReducers({

  AuthReducer,
  AdReducer,
  MsgReducer
  
   
 })
 export let store=createStore(
    rootReducer,
    
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
    
)
