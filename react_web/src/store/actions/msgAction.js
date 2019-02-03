export default class  MsgAction{
    static SEND_MESSAGE = 'SEND_MESSAGE'
    static LOAD_MY_MESSAGES_SUCCESS ="LOAD_MY_MESSAGES_SUCCESS"
    static DELETE_MESAGE ="DELETE MESSAGE"



    static sendMessage(messageObject)
{
    return{
    type:MsgAction.SEND_MESSAGE,
    payload:messageObject
}
}


static loadMyMessagesSuccess(messages) {
    return {
      type: MsgAction.LOAD_MY_MESSAGES_SUCCESS,
      payload: messages
    }
  }
  
static  deleteMessage(msgId) {
    return {
      type: MsgAction.DELETE_MESSAGE,
      payload: msgId
    }

}

}