import React from 'react';
import {connect, Provider} from "react-redux";
import Com from './com'
import getUsers from './reducer'

class ComContaine extends React.Component{
    componentDidMount(){
        this.props.getUsers()
        }
    render(){
        return (
        <div><Com props={this.props} /></div>
        )
    }

    
}

const mapStateToProps = (state) => {
    return{
    reducerbla: state.reducer
    }
}
const sendMessage = (dispatch) => {
    dispatch({type:"tesfgst"});
}
/*const mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: () => {
            dispatch({type:"tesfgst"});
        }
}
}*/
let ComContainer = connect(mapStateToProps,{sendMessage,getUsers})(ComContaine)
export default ComContainer