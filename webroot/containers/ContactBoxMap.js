import {connect} from 'react-redux'
import ContactBox from '../components/contact/ContactBox'
import {showView} from '../actions/home'
const mapStateToProps = (state)=> {
    var { home, routing } = state;
    return {
        view: home.view,
        belongto: home.belongto,
        routing
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        showView: (view,belongto) => {
            dispatch(showView(view,belongto))
        }
    }
}

var ContactBoxMap = connect(mapStateToProps,mapDispatchToProps)(ContactBox);

export default ContactBoxMap;