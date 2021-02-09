import dataReducer from "./reducer"

const url = "http://127.0.0.1:8000/api"

export const getAllData = () => {
    return (dispatch, getState) =>{
        fetch(`${url}/dukcapil`)
        .then(res => res.json())
        .then(data  => {
            dispatch({
                type : "getData",
                dukcapilData : data
            })
        })
        .catch(err => console.log(err))
    }
}

export const addData = (payload) =>{
    return (dispatch , getState) => {
        // console.log(getState().dukcapilData, "ini di action")
        const currentData = getState().dukcapilData
        const newData = currentData.push(payload)
        console.log(JSON.stringify(payload), "ini")
        const inputData = JSON.stringify(payload)
        fetch(`${url}/dukcapil`, {
            method : 'POST',
            body: inputData,
            // headers: {
            //   'Content-Type' : 'application/x-www-form-urlencoded'
            // }
        }).then(res => res.json() )
        .then (data => {
            console.log(data,"ini di action")
            dispatch({
                type : 'addData',
                dukcapilData : data
            })
        })
 
    }
}

