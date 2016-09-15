import React from 'react'
import {showView} from '../../actions/home'
import {packScroll} from "../higherComp";

const Contact = React.createClass({
    contextTypes:{
        router: React.PropTypes.object,
        store: React.PropTypes.object
    },
    render(){
        var {contact, touchStart, touching, touchEnd} = this.props;
        return (
            <div data-pid={contact.id} className="contact"
                 onTouchStart={touchStart}
                 onTouchMove={touching}
                 onTouchEnd={e => {
                    touchEnd(e,this.personInfo(e))
                 }}>
                <img src={contact.portrait} width="42px" />
                <p>{contact.name}</p>
            </div>
        )
    },
    personInfo(e){
        var $element = $(e.target);
        if(!$element.hasClass("contact")){
            $element = $element.closest(".contact");
        }
        console.log($element[0]);
        var pid = $element.data("pid");
        var {store,router} = this.context;
        store.dispatch(showView("contact/personinfo","contact",{pid: pid}));
        router.push("/appview/home#/contact/personinfo");
    }
})

export default packScroll(Contact);