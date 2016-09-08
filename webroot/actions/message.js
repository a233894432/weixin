
export const intoMessage = function(messageid){
    return {
        type: 'INTO_MESSAGE',
        messageid
    }
}

export const intoChatBoxSeting = function(chatBoxID){
    return {
        type: 'INTO_CHATBOXSETING',
        chatBoxID
    }
}