import React from 'react'
import ContactGroup from './ContactGroup'

const ContactList = React.createClass({

    render(){
        var {usersgroup} = this.props;
        var groups = [];
        for(let i in usersgroup){
            groups.push(<ContactGroup key={i} belong={i} cts={usersgroup[i]}/>);
        }
        return (
            <div className="contactlist">
                {groups}
            </div>
        )
    }
})
export default ContactList;