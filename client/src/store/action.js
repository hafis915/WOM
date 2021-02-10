import dataReducer from "./reducer"

const url = "http://127.0.0.1:8000/api"

export const getAllData = () => {
    console.log("ambil data")
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
        console.log(getState().dukcapilData, "ini di action add data")
        const currentData = getState().dukcapilData
        const newData = currentData.push(payload)
        console.log('ini new data', newData)
        // console.log(JSON.stringify(payload), "ini")
        const inputData = JSON.stringify(payload)
        fetch(`${url}/dukcapil`, {
            method : 'POST',
            body: inputData,

        }).then(res => res.json() )
        .then (data => {
            console.log(data,"ini di action")
            dispatch({
                type : 'addData',
                data : data
            })
        })
 
    }
}

export const deleteData = (id) => {
    console.log(id , 'ini id di action delete')
    return (dispatch, getState) => {
        let currentData = getState().dukcapilData
        console.log(currentData, "ini delete")
        currentData =  currentData.filter(el => el.id != id )
        console.log(currentData)
        fetch(`${url}/dukcapil/${id}`, {
            method : 'DELETE',
        }).then(res => {
            console.log(res, 'ini res')
            dispatch({
                type : 'deleteData',
                data : currentData
            })
        } )
    }
}

export const searchDataById = (id) => {
    console.log(id, "ini Id di edit")
    return (dispatch, getState) =>{
        fetch(`${url}/dukcapil/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data,"ini data edit")
            dispatch({
                type : 'getDataById',
                data 
            })
        })
    }
}

export const editPersonalData = (payload) =>{
    const id = payload.id
    const inputData = JSON.stringify(payload.data)
    console.log(inputData , "ini di action edit")
    return (dispatch, getState) => {
        let currentData = JSON.parse(JSON.stringify(getState().dukcapilData))
        let newData = currentData.map( (el) => {
            console.log(id, el.id)
            if(+el.id == id) {
                console.log( "sama========================")
                el = payload.data
                return el
            }
            return el
        })
        console.log(newData, "ini nininiiiiiiii")
        fetch(`${url}/dukcapil/${id}`,{
            method : "PUT",
            body : inputData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data,"ini data edit")
            dispatch({
                type : 'editPersonalInfo',
                data : newData
            })
        })
    }
}