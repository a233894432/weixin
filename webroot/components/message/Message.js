import React from 'react'
import { showView } from '../../actions/home'

const Message = React.createClass({
    contextTypes: {
        router: React.PropTypes.object,
        store: React.PropTypes.object
    },
    render(){
        var {message,handleClickMessage} = this.props;
        var { router, store} = this.context;
        return(
            <div className="message" onClick={(e) => {
                store.dispatch(showView("message","message"));
                router.push("/appview/home#/message");
            }}>
                <img className="portrait" src={message.thumb} />
                <p className="maintit" style={message.type == 2 ? {color:'#38f'}: {}}>{message.title}</p>
                <small>{message.subTitle}</small>
                <span className="time">{message.time}</span>
            </div>
        )
    }
})

export default Message;