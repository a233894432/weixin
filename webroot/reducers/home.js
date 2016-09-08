
const home = (state={},action) => {
    switch (action.type) {
        case "INTO_MESSAGE":
            return Object.assign({},state, {
                message: {
                    into_id: action.messageid || 0,
                    num: 0
                }
            })
        case "INTO_CHATBOXSETING":
            return Object.assign({},state, {
                chatBoxSeting: {
                    into_id: action.chatBoxID || 0
                }
            })
        case "SHOW_VIEW":
            return Object.assign({},state, {
                view: action.view,
                belongto: action.belongto
            })
        default:
            return state;
    }
}

export default home