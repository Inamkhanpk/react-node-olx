import MsgAction from './../actions/msgAction.js';



const initialState={
    myMessages:[]
    
    
    

}

function MsgReducer(state=initialState,action){
    switch(action.type){
        case MsgAction.SEND_MESSAGE:
        return {...state,myMessages:action.payload}
        default :
        return state;
    }
}
export default MsgReducer;