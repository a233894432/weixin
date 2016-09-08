import React from 'react'
import {render} from 'react-dom'
import MessageList from "./MessageList"
import ChatBox from '../chat/ChatBox'
//import ChatBoxMap from '../../containers/ChatBoxMap'
import ChatSet from '../chat/ChatSet';
import Z_Util from '../../statics/js/public'

const MessageBox = React.createClass({
    contextTypes:{
        subPages: React.PropTypes.string,
        router: React.PropTypes.object,
        store: React.PropTypes.object
    },
    componentWillReceiveProps(nextProps,nextContext){

        var {subPages} = nextContext,
            {into_msg_id,view,showView,belongto} = nextProps,
            prevHash = this.props.routing.locationBeforeTransitions.hash,
            nextHash = nextProps.routing.locationBeforeTransitions.hash,
            historyState = Z_Util.getHistoryState(prevHash, nextHash);
        if(belongto != "message") return false;

        if(historyState == "reload" && !prevHash.startsWith(nextHash)){
            $("#subPage").empty();
        }

        console.log("messagebox 接收到的属性");
        console.log(nextProps);
        console.log("历史操作：" + historyState);

        if(historyState == "back"){
            if(view.endsWith("chatbox")){
                var div2 = $(subPages).find(".div2");
                Z_Util.runAnim(div2,"slideOutRight",function(){
                    div2.remove();
                    showView("message","message")
                })
            }
            if(view.endsWith("message")){
                var div1 = $(subPages).find(".sub_message");
                Z_Util.runAnim(div1,"slideOutRight", function(){
                    div1.remove();
                    showView("","home");
                })
            }
        }else{
            if(view.startsWith("message") && $(subPages).find(".sub_message").length == 0){
                var div1 = $("<div class='sub_message'></div>");

                div1.appendTo(subPages);
                render(<ChatBox context={this.context} msgid={into_msg_id}/>,div1[0]);

                if(historyState != "reload") Z_Util.runAnim(div1,"slideInRight");
            }
            if(view.startsWith("message/chatbox")){
                var div1 = $("<div class='div2'></div>");

                div1.appendTo(subPages);
                render(<ChatSet {...this.context} />,div1[0]);

                if(historyState != "reload") Z_Util.runAnim(div1,"slideInRight");
            }
        }

    },
    render(){
        return (
            <div id="messagebox">
                <MessageList/>
            </div>
        )
    }
})
export default MessageBox;