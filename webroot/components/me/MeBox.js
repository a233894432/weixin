import React from 'react'

const MeBox = () => (
    <div id="mebox">
        <div className="me_group userinfo">
            <div className="me_item">
                <img src="/statics/images/portrait.png"/>
                <p className="title">周旭东</p>
                <small>微信号： 123456798</small>
            </div>
        </div>
        <div className="me_group">
            <div className="me_item">
                <i className="icon-camera"></i> 相册
            </div>
            <div className="me_item">
                <i className="icon-box"></i> 收藏
            </div>
        </div>
        <div className="me_group">
            <div className="me_item">
                <i className="icon-briefcase"></i> 钱包
            </div>
            <div className="me_item">
                <i className="icon-cc-visa"></i> 卡包
            </div>
        </div>
        <div className="me_group">
            <div className="me_item">
                <i className="icon-emo-happy"></i> 表情包
            </div>
        </div>
        <div className="me_group">
            <div className="me_item">
                <i className="icon-cog"></i> 设置
            </div>
        </div>
    </div>
)

export default MeBox;