import React from 'react'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll'

import OfficialItem from './OfficialItem'
import Z_API from '../../statics/js/api'
import Z_Util from '../../statics/js/public'

const OfficialGroup = React.createClass({

    render(){
        var {subscriber} = this.props;
        return (
            <div key={subscriber.belong} className="contact_group">
                <div className="ct_belong">{subscriber.belong}</div>
                {
                    subscriber.subs.map( official => <OfficialItem key={official.id} official={official} />)
                }
            </div>
        )
    }
})

const OfficialBox = React.createClass({
    getDefaultProps(){
        return ({
            options: {
                mouseWheel: true,
                scrollbars: false
            }
        })
    },
    getInitialState(){
        return {
            subscribList: []
        }
    },
    componentDidMount(){
        var {uid} = this.props.context;
        $.ajax({
            url: Z_API.getSubScriberList,
            data: {id:uid},
            success: function(data){
                if(data.response_data){
                    this.setState({
                        subscribList: data.response_data
                    })
                }
            }.bind(this)
        })
    },
    render(){
        var {subscribList} = this.state;

        subscribList = Z_Util.sortNameByPy(subscribList,"name");
        subscribList = Z_Util.groupBy(subscribList,"belong");
        var groups = [];
        for(let i in subscribList){
            groups.push({belong: i,subs: subscribList[i]});
        }
        return (
            <div className="official viewItem">
                <div className="header">
                    <i onClick={this.handleReturn} className="icon-angle-left"></i> 公众号
                    <i onClick={this.setMessage} className="icon-user fr"></i>
                </div>
                <div style={{height:"calc(100% - 45px)"}} className="content">
                    <ReactIScroll ref="scroller" iScroll={iScroll} options={this.props.options} onScrollStart={this.onScrollStart}>
                        <div style={{backgroundColor: "#FFF"}}>
                            { groups.map(subscriber => <OfficialGroup subscriber={subscriber}/>) }
                        </div>
                    </ReactIScroll>
                </div>
            </div>
        )
    }
})
export default OfficialBox;