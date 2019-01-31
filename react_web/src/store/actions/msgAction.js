export default class  MsgAction{
    static SEND_MESSAGE = 'SEND_MESSAGE'



    static sendMessage(messageObject)
{
    return{
    type:MsgAction.SEND_MESSAGE,
    payload:messageObject
}
}



}