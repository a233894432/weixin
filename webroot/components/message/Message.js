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
            }} onTouchEnd={ this.touchEnd } onTouchStart={this.touchStart} onTouchMove={this.touching}>
                <img className="portrait" src={message.thumb} />
                <p className="maintit" style={message.type == 2 ? {color:'#38f'}: {}}>{message.title}</p>
                <small>{message.subTitle}</small>
                <span className="time">{message.time}</span>
            </div>
        )
    },
    timestamp: 0,
    startY: 0,
    endY: 0,
    touchStart(e){
        this.timestamp = new Date().getTime();
        this.startY = e.targetTouches[0].clientY;
        this.endY = this.startY;
    },
    touching(e){
        this.endY = e.targetTouches[0].clientY;
    },
    touchEnd(e){

        //alert("startY" + this.startY +"\n" + "endY" + this.endY)
        var { router, store} = this.context;

        var timeDiff = new Date().getTime() - this.timestamp;
        var yDiff = this.endY == 0 ? 0 : (this.endY - this.startY);
        //alert("timeDiff:" + timeDiff + "\n" + "yDiff: " + yDiff);
        if(timeDiff < 200 && Math.abs(yDiff) < 20){
            store.dispatch(showView("message","message"));
            router.push("/appview/home#/message");
        }
    }
})

export default Message;