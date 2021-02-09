import React from 'react'
    
import { IonRow, IonCol, IonIcon,} from '@ionic/react';
import './Table.css'
import { 
    trashOutline, 
    pencilOutline, 
  } from 'ionicons/icons';
import { useHistory }  from 'react-router-dom'

const BodyTable : React.FC = () => {
    const history = useHistory()
    const handleDelete = () => {
        console.log('delete')
    }

    const handleEdit = () => {
        history.push('/edit')
    }

    
    return (
        <IonRow className= 'body-table' >
            <IonCol className="ion-align-center" >NIK</IonCol>
            <IonCol className="ion-align-center" >Name</IonCol>
            <IonCol className="ion-align-center" >Maiden Name</IonCol>
            <IonCol className="ion-align-center" >Gender</IonCol>
            <IonCol className="ion-align-center" >Religion</IonCol>
            <IonCol className="ion-align-center" >Marital Status</IonCol>
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