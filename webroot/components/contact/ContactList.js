import React from 'react'
import ContactGroup from './ContactGroup'
import Z_API from '../../statics/js/api'
import {showView} from '../../actions/home'

const ContactList = React.createClass({
    contextTypes: {
        router: React.PropTypes.object,
        store: React.PropTypes.object,
        uid: React.PropTypes.number
    },
    render(){
        var {usersgroup} = this.props;
        var groups = [];
        for(let i in usersgroup){
            groups.push(<ContactGroup key={i} belong={i} cts={usersgroup[i]}/>);
        }
        return (
            <div className="contactlist">
                <div className="contact_group">
                    <div data-pid="1" className="contact">
                        <img src="/statics/images/cangshu.png" width="42px" />
                        <p>新朋友</p>
                    </div>
                    <div data-pid="1" className="contact">
                        <img src="/statics/images/cangshu.png" width="42px" />
                        <p>群聊</p>
                    </div>
                    <div data-pid="1" className="contact">
                        <img src="/statics/images/cangshu.png" width="42px" />
                        <p>标签</p>
                    </div>
                    <div onClick={this.getSubScriberList} data-pid="1" className="contact">
                        <img src="/statics/images/cangshu.png" width="42px" />
                        <p>公众号</p>
                    </div>
                </div>
                {groups}
            </div>
        )
    },
    getSubScriberList(){
        var {store, router} = this.context;

        store.dispatch(showView("contact/official","contact"));
        router.push("/appview/home#/contact/official");
        //$.ajax({
        //    url: Z_API.getSubScriberList + "?id=1",
        //    success: function(data){
        //        console.log("getSubScriberList");
        //        console.log(data);
        //    }
        //})
    }
})
export default ContactList;