import React from 'react'
import Message from './Message'

const MessageList = React.createClass({

    render(){
        var messageList = [
            {id:1,title:"电影演出票",type:2,subTitle:"[图片]",time:"昨天",thumb:"/statics/images/portrait.png"},
            {id:2,title:"大哥",type:1,subTitle:"领取了你的红包",time:"周一",thumb:"/statics/images/portrait.png"},
            {id:3,title:"薇薇",type:1,subTitle:"好的，我把资料再整理整理给你发下",time:"7月23日",thumb:"/statics/images/portrait.png"}
        ]
        return (
            <div className="MessageList">
                {
                    messageList.map( msg => <Message key={"msg_" + msg.id} message={msg}/>)
                }
            </div>
        )
    }
})
export default MessageList;
