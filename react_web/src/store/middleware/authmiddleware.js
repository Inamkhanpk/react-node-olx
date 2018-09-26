
import axios from 'axios';
import AuthAction from "../actions/authAction";
import toastr from 'toastr';


 export default class AuthMiddleware{

    static registerUser(credentials)
    {
        return (dispatch)=>{

            dispatch(AuthAction.register())
            AuthMiddleware.SendUserOnServer(dispatch,credentials)
        }
    }
    static SendUserOnServer(dispatch,credentials){
        axios.post('http://localhost:3001/registeration',
     credentials.user
        
    )
    .then((res)=>{
       console.log("Successfully send on server")
       console.log(res);
       console.log(res.data);
       toastr.info(res.data);
    })
    .catch((err)=>{
        console.log("Error")
        toastr.error(err);
    })
    }
 }