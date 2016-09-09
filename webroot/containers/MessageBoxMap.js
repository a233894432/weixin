import {connect} from 'react-redux'
import MessageBox from "../components/message/MessageBox"
import {showView} from '../actions/home'

const mapStateToProps = (state) => {
    var { home, routing } = state;
    return {
        into_msg_id: home.message ? home.message.into_id : 0,
        view: home.view,
        belongto: home.belongto,
        routing
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showView: (view,belongto) => {
            alert(view);
            dispatch(showView(view,belongto))
        }
    }
}

var MessageBoxMap = connect(mapStateToProps,mapDispatchToProps)(MessageBox);
export default MessageBoxMap;