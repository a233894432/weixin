import React from 'react'
import {showView} from '../../actions/home'

const Contact = React.createClass({
    contextTypes:{
        router: React.PropTypes.object,
        store: React.PropTypes.object
    },
    render(){
        var {contact} = this.props;
        return (
            <div className="contact" onClick={this.personInfo}>
                <img src={contact.thumb} />
                <p>{contact.name}</p>
            </div>
        )
    },
    personInfo(){
        console.log(this);
        var {store,router} = this.context;
        store.dispatch(showView("contact/personinfo","contact"));

        router.push("/appview/home#/contact/personinfo");
    }
})

export default Contact;