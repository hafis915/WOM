import React from 'react'
    
import { IonRow, IonCol, IonIcon,} from '@ionic/react';
import './Table.css'
import { 
    trashOutline, 
    pencilOutline, 
  } from 'ionicons/icons';
import { useHistory }  from 'react-router-dom'

const BodyTable : React.FC<{element : any}> = ({element}) => {
    const history = useHistory()
    const handleDelete = () => {
        console.log('delete')
    }

    const handleEdit = () => {
        history.push('/edit')
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