import AuthAction from './../actions/authAction.js';
 
const initialState={
    
    isRegistered: false,
    personInfo:{}
    

}

function AuthReducer(state=initialState,action){
    switch(action.type){
        case AuthAction.REGISTER_USER :
        return {...state,isRegistered:true,personInfo:action.payload};
        default :
        return state;
    }
}
export default AuthReducer;