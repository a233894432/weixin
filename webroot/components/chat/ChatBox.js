import React from 'react';
import {render} from 'react-dom';
import ChatSet from '../chat/ChatSet';
import Z_Util from '../../statics/js/public'

import {showView} from '../../actions/home'
require("../../statics/less/chatbox.less");

const ChatBox = React.createClass({
    render(){
        return (
            <div ref="chatBox" className="chatbox viewItem">
                <div className="header">
                    <i onClick={this.handleReturn} className="icon-angle-left"></i> 静静
                    <i onClick={this.setMessage} className="icon-user fr"></i>
                </div>
                <div className="chatpanel content">
                    <div className="chatItem self">
                        <img src="/statics/images/portrait.png" />
                        <div className="chat_content">
                            最近在疯狂的记代码，js学完了还有jquery.还有bootstrap、angular。
                            jquery的ajax。然后考试了。
                        </div>
                    </div>
                    <div className="chatItem other">
                        <img src="/statics/images/portrait.png" />
                        <div className="chat_content">
                            最近在疯狂的记代码，js学完了还有jquery.还有bootstrap、angular。
                            jquery的ajax。然后考试了。
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="circle ime">
                        <i className="icon-volume-up"></i>
                    </div>
                    <input type="text" className="form-control sendmsg"/>
                    <div className="send_icon">
                        <button className="btn btn-sm btn-primary">发送</button>{" "}
                        <div className="circle ml10">
                            <i className="icon-emo-happy"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    handleReturn(){
        var {router} = this.props.context;

        router.push("/appview/home");
    },
    setMessage(){

        var {router,store} = this.props.context;

        store.dispatch(showView("message/chatbox","message"));

        router.push("/appview/home#/message/chatbox");

    }
})
export default ChatBox;