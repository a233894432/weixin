import React from 'react'
import {render} from 'react-dom'
import Z_Util from '../../statics/js/public'
import ContactList from './ContactList'
import PersonInfo from './PersonInfo'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll'
require("../../statics/less/contact.less");

const ContactBox = React.createClass({
    contextTypes: {
        router: React.PropTypes.object,
        store: React.PropTypes.object
    },
    getDefaultProps(){
        return ({
            options: {
                mouseWheel: true
            }
        })
    },
    componentWillReceiveProps(nextProps,nextContext){
        var {view,belongto,showView} = nextProps,
            prevHash = this.props.routing.locationBeforeTransitions.hash,
            nextHash = nextProps.routing.locationBeforeTransitions.hash,
            historyState = Z_Util.getHistoryState(prevHash, nextHash);
        if(belongto != "contact") return false;

        if(historyState == "reload" && !prevHash.startsWith(nextHash)){
            $("#subPage").empty();
        }

        console.log("contactbox 接收到的属性");
        console.log("history 状态:" + historyState);
        if(historyState == "back"){
            if(view.endsWith("contact/personinfo")){
                var div1 = $("#subPage").find(".personinfo");
                Z_Util.runAnim(div1,"slideOutRight",function(){
                    div1.remove();
                    showView("","home");
                })
            }
        }else{
            if(view.startsWith("contact/personinfo")){
                var div1 = $("<div class='personinfo'></div>");

                div1.appendTo("#subPage");
                render(<PersonInfo context={this.context} />,div1[0]);

                if(historyState != "reload") Z_Util.runAnim(div1,"slideInRight");
            }
        }


    },
    render(){
        var users = [
            {id:1,"name":"aaa",thumb:'/statics/images/portrait.png'},{id:2,"name":"bbb",thumb:'/statics/images/portrait.png'},
            {id:3,"name":"ccc",thumb:'/statics/images/portrait.png'},{id:4,"name":"abc",thumb:'/statics/images/portrait.png'},
            {id:5,"name":"包含",thumb:'/statics/images/portrait.png'},{id:6,"name":"引用",thumb:'/statics/images/portrait.png'},
            {id:7,"name":"黄汉",thumb:'/statics/images/portrait.png'},{id:8,"name":"夏荨",thumb:'/statics/images/portrait.png'}
        ];
        users = Z_Util.sortNameByPy(users,"name");
        users = Z_Util.groupBy(users,"belong");
        return (
            <div id="contactbox" style={{height:"100%"}}>
                <ReactIScroll iScroll={iScroll} options={this.props.options} onScrollStart={this.onScrollStart}>
                    <ContactList usersgroup={users}/>
                </ReactIScroll>
            </div>
        )
    }
})


export default ContactBox;