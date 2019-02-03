export default class  NotificationAction{
    static REQUSET_NOTIFICATION_PERMISSION = 'REQUEST_NOTIFICATION_PERMISSION'
    static SEND_NOTIFICATION = 'SEND_NOTIFICATION'

    static requestNotificationPermission(){
        return{
        type:NotificationAction.REQUSET_NOTIFICATION_PERMISSION
    }
     
    }
    
    static sendNotification(receiverId, notification){
        let payload = {
            userId: receiverId,
            notification: notification
          }
        return {
            type:NotificationAction.SEND_NOTIFICATION,
            payload:payload

        }
    }
}