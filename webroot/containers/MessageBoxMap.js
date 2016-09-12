import {connect} from 'react-redux'
import MessageBox from "../components/message/MessageBox"
import {showView} from '../actions/home'
import {apiMessageList} from "../actions/message"
const mapStateToProps = (state) => {
    var { home, routing } = state;
    return {
        into_msg_id: home.message ? home.message.into_id : 0,
        view: home.view,
        belongto: home.belongto,
        messages: home.messages || [],
        routing
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showView: (view,belongto) => {
            dispatch(showView(view,belongto))
        },
        getMessages: (uid) => {
            dispatch(apiMessageList(uid))
        }
    }
}

var MessageBoxMap = connect(mapStateToProps,mapDispatchToProps)(MessageBox);
export default MessageBoxMap;