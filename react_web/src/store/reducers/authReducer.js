import AuthAction from './../actions/authAction.js';


const initialState={
    isProcessing:false,
    isRegistered: false,
    isLogin:false,
    isAuthenticated:false,
    
    isError:false,
    person:{},
    errors1:false
    
    
    

}

function AuthReducer(state=initialState,action){
    switch(action.type){
        case AuthAction.REGISTER :
        return {...state,isRegistered:true,isProcessing:false,isError:false};
        case AuthAction.REGISTER_USER :
        return {...state,isRegistered:false,isProcessing:true,isError:false,person:action.payload};
        case AuthAction.REGISTER_ERRORS:
        return{...state,isProcessing: false, isRegistered: false,isError : true, errors1:action.payload};
        case AuthAction.LOGIN :
        return {...state, isProcessing: true, isAuthenticated: false, isError : false}
        case AuthAction.LOGIN_SET_CURRENT_USER:
        return {...state,isProcessing: false, isAuthenticated:action.user, isError : false }
        case AuthAction.LOGIN_ERROR :
        return {...state,isProcessing: false, isAuthenticated: false, isError : true, errors: action.payload}
        default :
        return state;
    }
}
export default AuthReducer;