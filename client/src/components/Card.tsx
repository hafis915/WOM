  
import React from "react"
import { 
    IonItem,
    IonNav,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonRouterOutlet,
    IonTabButton,
    IonList
  } from '@ionic/react';
import { 
    trashOutline, 
    pencilOutline, 
    chevronForwardOutline ,
  } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
// import Detail from '../pages/Detail'
import {Route, Redirect, useHistory} from 'react-router-dom'

const VictimCard:React.FC = ( ) => {

  const history = useHistory()
  const handleDetailInfo = () => {
    console.log("detail")
  }
  const handleMoreInfo = () => {
      console.log("")
  }

  const handleDeleteVictim = (id:any) => {
    console.log("")

  }
return(
    <IonReactRouter>

    <IonCard
      className="dashBoardCard"
    >
          <IonCardHeader
          className='dashbordCardHeader'
          >
            <img src="" alt="photo URL"/>
            <IonCardTitle>
              <h4>Name</h4>
            </IonCardTitle>
            <div className="action">

            <IonIcon
              icon= {pencilOutline}
              onClick= {handleDetailInfo}
              className= "editCard"
              />
            
            <IonIcon 
            // onClick = {() =>  handleDeleteVictim(victim.id)}
            className= "deleteCard"
            icon={trashOutline} />
            
            <IonIcon
            onClick= {handleMoreInfo}
            icon= {chevronForwardOutline}
            className= "nextCard"
            />
           
            </div>
          </IonCardHeader>
    </IonCard>
    </IonReactRouter>

)
}

export default VictimCard