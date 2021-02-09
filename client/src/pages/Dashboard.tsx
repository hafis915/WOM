import { 
    IonContent, 
    IonHeader, 
    IonIcon, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonSearchbar
  
    
  } from '@ionic/react';
import "./Dashboard.css";
import Table from '../components/Table'


import {chevronBackOutline} from "ionicons/icons"
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
  
  const Dashboard: React.FC = () => {
    const history = useHistory()
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState<Boolean>(true)
    const [newData, setNewData] = useState<Array<Object>>([])

  
    return (
  
      <IonPage>
        <IonHeader
        className="dashboardHeader"
        >
          <IonToolbar>
            <IonTitle
            className="title"
            >Dukcapil Data</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent 
        fullscreen
        className="dashboardContainer"
        >
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 1</IonTitle>
            </IonToolbar>
          </IonHeader>
          
          <IonContent
          className= "dashboardContent"
          >
            <IonSearchbar
            className= "search-bar"
            value={searchText} 
            onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
           
            <h4>Dukcapil Data</h4>
           <Table></Table>
  
          </IonContent>
        </IonContent>
      </IonPage>
  
    );
  };
  
  export default Dashboard;