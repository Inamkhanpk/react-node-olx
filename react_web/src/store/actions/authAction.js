export default  class AuthAction{
    static REGISTER_USER = 'REGISTER_USER';

    static register(){
        return{
            type:AuthAction.REGISTER_USER,
            
        }
    }
}