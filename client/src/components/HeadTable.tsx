import React from 'react'
import {  IonRow, IonCol,  } from '@ionic/react';
// import './Table.css'

const HeadTable : React.FC = () => {
    return (
        <IonRow className= "head-table" >
            <IonCol className="ion-align-center " >NIK</IonCol>
            <IonCol className="ion-align-center" >Name</IonCol>
            <IonCol className="ion-align-center" >Maiden Name</IonCol>
            <IonCol className="ion-align-center" >Gender</IonCol>
            <IonCol className="ion-align-center" >Religion</IonCol>
            <IonCol className="ion-align-center" >Marital Status</IonCol>
            <IonCol className="ion-align-center" >Action</IonCol>
        </IonRow>
    )
}

export default HeadTable