import React from 'react'

import MessageBoxMap from '../../containers/MessageBoxMap'
import ContactBoxMap from '../../containers/ContactBoxMap'
import DiscoverBoxMap from '../../containers/DiscoverBoxMap'
import MeBox from '../me/MeBox'

require("../../statics/less/home.less");

const Home = React.createClass({
    contextTypes:{
        color: React.PropTypes.string,
        subPages: React.PropTypes.string
    },
    render(){
        return (
            <div id="home" className="home" data-color={this.context.color}>
                <div className="boxs_wraper">
                    <div className="box_item">
                        <MessageBoxMap />
                    </div>
                    <div className="box_item">
                        <ContactBoxMap />
                    </div>
                    <div className="box_item">
                        <DiscoverBoxMap />
                    </div>
                    <div className="box_item">
                        <MeBox />
                    </div>
                </div>
            </div>
        )
    }
})
export default Home;