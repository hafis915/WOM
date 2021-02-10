import React from "react"
import { 
    IonItem,
    IonNav,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonLabel,
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
import {Route, Redirect, useHistory} from 'react-router-dom'
import './Card.css'
import {useDispatch}  from 'react-redux'
import { deleteData } from '../store/action'

const VictimCard:React.FC<{data : any}> = ( {data}) => {
  console.log(data, "ini di card")

  const history = useHistory()
  const dispatch = useDispatch()
  const handleDelete = () => {
      console.log(data.id)
      dispatch(deleteData(data.id))
  }

  const handleEdit = () => {
      const location = {
          pathname: `edit/${data.id}`,
          state: { data }
      }
      history.push(location)
      // history.push(`edit/${element.id}`, {data : element})
  }
return(
    <IonReactRouter>

    <IonCard
      className="dashBoardCard"
    >
          <IonCardHeader
          className='dashbordCardHeader'
          >
            <IonCardTitle>
              <h4>NIK         : {data.NIK} </h4>
              <h4>Name : {data.name} </h4>
              <h4>Maiden Name : {data.maidenName} </h4>
              <h4>Birth Date : {data.birthDate}</h4>
              <h4>Religion : {data.religion}</h4>
              <h4>Marital Status : {data.maritalStatus}</h4>
            </IonCardTitle>
            <div className="action">

              <IonIcon 
              onClick = {handleDelete}
              className= "deleteCard"
              icon={trashOutline} />
              <IonLabel>
                <p>Delete</p>
              </ IonLabel>


            <IonIcon
              icon= {pencilOutline}
              onClick= {handleEdit}
              className= "editCard"
              />
              <IonLabel>
                <p>Edit</p>
              </IonLabel>

            </div>
          </IonCardHeader>
    </IonCard>
    </IonReactRouter>

)
}

export default VictimCard