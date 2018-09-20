import AuthAction from './../actions/authAction.js';
 
const initialState={
    
    isRegistered: false,
    

}

function AuthReducer(state=initialState,action){
    switch(action.type){
        case AuthAction.REGISTER_USER :
        return {...state};
        default :
        return state;
    }
}
export default AuthReducer;