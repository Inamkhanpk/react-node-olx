
import axios from 'axios';
import AuthAction from "../actions/authAction";
import setAuthToken from './../../components/setAuthToken';
import jwt_decode from 'jwt-decode';
import toastr from 'toastr';




 export default class AuthMiddleware{

    static registerUser(credentials)
    {
        return (dispatch)=>{
            dispatch(AuthAction.register())
            AuthMiddleware.SendUserToServer(dispatch,credentials)

        } 
    }
    static SendUserToServer(dispatch,credentials)
    {
    axios.post('http://localhost:3001/registeration',{credentials} )
        .then((res)=>{
         console.log("Successfully send on server")
         console.log(res);
         console.log(res.data);
         toastr.success("Successfully Registered")
         dispatch(AuthAction.registerUser(res.data))
       
    
    
    })
    .catch((err)=>{
        
           dispatch(AuthAction.registererror(err));
            console.log("Error ");
            toastr.error("Error")
        
        
        
    })
    }
 



    static loginUser(credentials)
    { 
        console.log(credentials)
        return (dispatch) =>{

            dispatch(AuthAction.login())
            AuthMiddleware.SendLoginUserOnServer(dispatch,credentials)

            
        }
    }
     
    static SendLoginUserOnServer(dispatch,credentials){
        axios.post('http://localhost:3001/login', {credentials})
         .then((res)=>{
            console.log("Successfully send Login Info on server")
            console.log(res);
             console.log(res.data);
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                console.log(setAuthToken(token))
                const decoded = jwt_decode(token);
                console.log(jwt_decode(token))
                dispatch(AuthAction.loginSetCurrentUser(decoded));
        
        
    
    })
    .catch((err)=>{
      dispatch(AuthAction.loginerror(err));
        console.log("Error Somewhere");
        
        
        
        
    })
    }



    static logoutUser() {
       return  (dispatch)=>{

            
            localStorage.removeItem('jwtToken');
            setAuthToken(false);
            dispatch(AuthAction.loginSetCurrentUser({}));
            window.location.href="/login"
            
            }}
        

        
    


    
 }
 