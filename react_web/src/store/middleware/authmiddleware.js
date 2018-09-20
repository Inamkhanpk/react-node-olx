
import axios from 'axios';
import AuthAction from "../actions/authAction";


 export default class AuthMiddleware{

    static signup(credentials)
    {
        return (dispatch)=>{

            dispatch(AuthAction.register())
            AuthMiddleware.SendUserOnServer(dispatch,credentials)
        }
    }
    static SendUserOnServer(dispatch,credentials){
        axios.post('http://localhost:3001/registration',
     credentials.user
        
    )
    .then((res)=>{
       console.log("Successfully send on server")
       console.log(res);
       console.log(res.data);
    })
    .catch((err)=>{
        console.log("Error")
    })
    }
 }