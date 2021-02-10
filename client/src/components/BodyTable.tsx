import React from 'react'
    
import { IonRow, IonCol, IonIcon,} from '@ionic/react';
import './Table.css'
import { 
    trashOutline, 
    pencilOutline, 
  } from 'ionicons/icons';
import { useHistory }  from 'react-router-dom'
import {useDispatch}  from 'react-redux'
import { deleteData } from '../store/action'

const BodyTable : React.FC<{element : any}> = ({element}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const handleDelete = () => {
        console.log(element.id)
        dispatch(deleteData(element.id))
    }

    const handleEdit = () => {
        const location = {
            pathname: `edit/${element.id}`,
            state: { element }
        }
        history.push(location)
        // history.push(`edit/${element.id}`, {data : element})
    }

    
    return (
        <IonRow className= 'body-table' >
            <IonCol className="ion-align-center" >{element.NIK}</IonCol>
            <IonCol className="ion-align-center" >{element.name}</IonCol>
            <IonCol className="ion-align-center" >{element.maidenName}</IonCol>
            <IonCol className="ion-align-center" >Gender</IonCol>
            <IonCol className="ion-align-center" >{element.religion}</IonCol>
            <IonCol className="ion-align-center" >{element.maritalStatus}</IonCol>
            <IonCol className="ion-align-center action" >
                <IonIcon
                onClick = {handleDelete}
                 className="delete"
                 icon={trashOutline} />

                <IonIcon 
                onClick = {handleEdit}
                className = "edit"
                icon={pencilOutline} />
            </IonCol>
        </IonRow>
    )
}

export default BodyTable