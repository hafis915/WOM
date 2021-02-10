const initialState = {
    dukcapilData : []
}

function dataReducer (state = initialState, action ) {

    switch (action.type) {
        case "getData":
            return { ...state , dukcapilData : action.dukcapilData}
        
        case 'addData' :{
            return state
            // return { ...state , dukcapilData : action.data}
        }
        case 'deleteData':
            console.log(action.data ,"ini di reduceer")
            return {...state , dukcapilData : action.data}
        default:
            return state
    }
}

export default dataReducer