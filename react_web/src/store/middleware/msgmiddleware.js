import axios from 'axios';
import MsgAction from "../actions/msgAction";
import toastr from 'toastr'


export default class MsgMiddleware{

    static sendMessage(contactMessage){
        return (dispatch)=>{
            MsgAction.sendMessage(contactMessage)
            MsgMiddleware.sendMesageOnServer(dispatch,contactMessage)
        }
    }

    static sendMessageOnServer(dispatch,contactMessage){
        axios.post('http://localhost:3001/sendMessage',{contactMessage})
        .then(res => {
            let receiverId = contactMessage.receiver;
            let notification = {
              title: "Message from " + contactMessage.name + " is received",
              body: contactMessage.message,
              //badge: `${url}assets/img/olx-logo.png`,
              //icon: `${url}assets/img/olx-logo.png`,
            };
            dispatch(notificationAction.sendNotification(receiverId, notification));
            toastr.info(res.data);
          })
          .catch(err => {
            toastr.error(err);
          })
          
      }
    
    

}