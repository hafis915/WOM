const initialState = {
    dukcapilData : []
}

function dataReducer (state = initialState, action ) {

    switch (action.type) {
        case "getData":
            return { ...state , dukcapilData : action.dukcapilData}
        
        case 'addData' :{
            return state
        }
        
        default:
            return state
    }
}

export default dataReducer