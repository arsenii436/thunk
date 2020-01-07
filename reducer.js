import axios from 'axios'

let initialState = {
    app:false,
    isFetcing:true,
    data:null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "test":
            return{state,data:action.data}
        default:
                return state

    }   
}
export const getUsers = (dispatch)=>{
    //https://jsonplaceholder.typicode.com/todos/1
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then((data)=>{
        dispatch({type:"test", data:data.data})
    })
}
export default reducer;