
export default  class AuthAction{
    static REGISTER = 'REGISTER'
    static REGISTER_USER = 'REGISTER_USER'
    static REGISTER_ERRORS = 'REGISTER_ERRORS';
    static LOGIN = 'LOGIN'
    static LOGIN_SET_CURRENT_USER = 'LOGIN_SET_CURRENT_USER'
    static LOGIN_ERROR ='LOGIN_ERROR'
    
    
    static register(){
        return{
            type:AuthAction.REGISTER,
    
            
        }
    }
    

    static registerUser(person){
        return{
            type:AuthAction.REGISTER_USER,
            payload:person
            
        }
    }


    static registererror(err){
        return{
            
        
                type: AuthAction.REGISTER_ERRORS,
                payload : err.response.data
            
            
        }
    }

    static login(){
        return{
            type:AuthAction.LOGIN
        }
    }


    
    

    static loginSetCurrentUser(user){
        return{
            type: AuthAction.LOGIN_SET_CURRENT_USER,
            user

        }
    }

    static loginerror(err){
        return{
            type:AuthAction.LOGIN_ERROR,
            payload: err.response.data
        }
    }

    

   
}