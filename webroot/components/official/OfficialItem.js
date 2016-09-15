import React from 'react'
import {packScroll} from "../higherComp";

const OfficialItem = React.createClass({
    render(){
        var {official,touchStart, touching, touchEnd} = this.props;
        return (
            <div ref="official" data-oid={official.id} className="contact"
                 onTouchStart={touchStart}
                 onTouchMove={touching}
                 onTouchEnd={e => {
                    touchEnd(e,this.toDetail)
                 }}>
                <img src={official.logo} width="42px" />
                <p>{official.name}</p>
            </div>
        )
    },
    toDetail(){
        var {official} = this.refs;
        var $element = $(official);

        var oid = $element.data("oid");
        var {store,router} = this.context;
        store.dispatch(showView("contact/official/detail","contact",{oid: oid}));
        //router.push("/appview/home#/contact/personinfo");
    }
})
export default packScroll(OfficialItem);