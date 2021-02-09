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
import { useSelector, useDispatch } from 'react-redux'
import { getAllData } from '../store/action'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
  
const Dashboard: React.FC = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('');
    const data = useSelector<any>(state => state)
    const [loading, setLoading] = useState<Boolean>(true)
    const [newData, setNewData] = useState<Array<Object>>([])

    useEffect(() =>{
      console.log(data)
      dispatch(getAllData())
      console.log(data, "aftaer")
      setLoading(false)
    }, [])
    
    if(loading) return <h1>Loading</h1>
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
           <Table
           data = {data}
           />
  
          </IonContent>
        </IonContent>
      </IonPage>
  
    );
  };
  
  export default Dashboard;