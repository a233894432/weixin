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
        var timeStr = "";
        var chatTime = new Date(message.ctime).getTime();
        var diffTime = new Date().getTime() - chatTime;

        if(diffTime < 1000 * 60){
            timeStr = "刚刚";
        }else if(diffTime < 1000 * 60 * 60){
            timeStr = parseInt(diffTime/(60*1000)) + "分钟前";
        }else if(diffTime < 1000 * 60 * 60 * 24){
            timeStr = parseInt(diffTime/(60 * 60 * 1000)) + "小时前";
        }else if(diffTime < 1000 * 60 * 60 * 24 * 30){
            timeStr = parseInt(diffTime/(1000 * 60 * 60 * 24)) + "天前";
        }else if(diffTime < 1000 * 60 * 60 * 24 * 30 * 12){
            timeStr = parseInt(diffTime/(1000 * 60 * 60 * 24 * 30)) + "月前";
        }
        return(
            <div data-mid={message.id} className="message" onClick={(e) => {
                //store.dispatch(showView("message","message"));
                //router.push("/appview/home#/message");
            }} onTouchEnd={ this.touchEnd } onTouchStart={this.touchStart} onTouchMove={this.touching}>
                <img className="portrait" src={message.portrait} />
                <p className="maintit" style={1 == 2 ? {color:'#38f'}: {}}>{message.name}</p>
                <small>{message.sendInfo}</small>
                <span className="time">{timeStr}</span>
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
            console.log(e.target)
            //store.dispatch(showView("message","message"));
            //router.push("/appview/home#/message");
        }
    }
})

export default Message;