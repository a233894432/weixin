import { connect } from 'react-redux'
import ChatBox from '../components/chat/ChatBox'
import {intoChatBoxSeting} from "../actions/message"

const mapStateToProps = (state) => {
    var { home } = state;
    return {
        into_chatbox_id: home.chatBoxSeting ? home.chatBoxSeting.chatBoxID : 0
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToChatBox: (id) => {
            dispatch(intoChatBoxSeting(id))
        }
    }
}

var ChatBoxMap = connect(mapStateToProps, mapDispatchToProps)(ChatBox);

export default ChatBoxMap;