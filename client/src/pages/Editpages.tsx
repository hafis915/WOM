import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonItem,
    IonInput,
    IonLabel,
    IonList,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonIcon
   } from '@ionic/react';
import './Addform.css';
import React, {useRef, useEffect, useState} from 'react'
import {chevronBackOutline} from "ionicons/icons"
import { useHistory, useParams , useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchDataById, editPersonalData } from '../store/action'

const Edit: React.FC = () => {
    const {state} = useLocation<any>()
    const {id} = useParams<any>()
    const history = useHistory()
    const dispatch = useDispatch()
    const data = useSelector((state :any) => state.personalInfo)
    const [currentInput, setCurrentInput ] = useState<any>({
        NIK : 0,
        name : 'Name',
        maidenName : 'maidenName',
        birthDate : 'birthDate',
        maritalStatus : 'maritalStatus',
        religion: 'religion',
        gender : 'gender'
    })

    console.log(state , "ini location")
    
    useEffect(() => {
      console.log(data, "in use effect")
      if(state?.element) {
        console.log(data , 'di use effect')
        setCurrentInput({
          NIK : +state.element.NIK,
          name : state.element.name,
          birthDate : state.element.birthDate,
          maidenName : state.element.maidenName,
          religion : state.element.religion,
          maritalStatus : state.element.maritalStatus
      })
        
      }
    }, [state])

    const handleBackHome =() => {
        history.push('/dashboard')
    }
  
    const handleSubmitVictim = () => {
      console.log(currentInput)
      const payload = {
        id ,
        data : currentInput
      }
      console.log(payload)
      dispatch( editPersonalData(payload) )
      history.push('/dashboard')

    }
    const onChangeHandler = (e:any) => {
      const value = e.target.value;
      const name = e.target.name
  
      setCurrentInput({
        ...currentInput,
        [name]: value
      })
    }
  
    return (
      <IonPage>
        <IonHeader
        className="addVictimHeader"
        >
        <IonToolbar
        className= "name"
        >
          <IonIcon 
          onClick= {handleBackHome}
          className="icon-back"
          icon={chevronBackOutline}></IonIcon>
          <IonTitle
          className="title"
          >Edit Data</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent 
        className="formContainer"
        fullscreen
        >
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 2</IonTitle>
            </IonToolbar>
          </IonHeader>
            <IonList
            className= "form"
            >
              <h4>Edit Dukcapil Data</h4>

            <IonItem
            className="input"
            >
              <IonLabel position="stacked">NIK</IonLabel>
              <IonInput
                name = "NIK"
                value = {currentInput.NIK}
                type="number"
                onIonChange={ e => onChangeHandler(e)}
                placeholder="468464645645"
               ></IonInput>
            </IonItem>
  
            
            <IonItem
            className="input"
            >
              <IonLabel position="stacked">Name</IonLabel>
              <IonInput
                name = "name"
                value = {currentInput.name}
                onIonChange = { e => onChangeHandler(e)}
                type="text"
                placeholder="John"
               ></IonInput>
            </IonItem>

            <IonItem
            className="input"
            >
              <IonLabel position="stacked">Maiden Name</IonLabel>
              <IonInput
                value = {currentInput.maidenName}
                onIonChange = { e => onChangeHandler(e)}
                name = "maidenName"
                type="text"
                placeholder="John"
               ></IonInput>
            </IonItem>

            <IonItem
            className="input"
            >
              <IonLabel position="stacked">Birth Date</IonLabel>
              <IonInput 
              value = {currentInput.birthDate}
              onIonChange = { e => onChangeHandler(e)}
              name = "birthDate"
              type='date'
              /> 
            </IonItem>
  
            <IonItem
            className="input"
            
            >
                <IonLabel>Marital Status : </IonLabel>
                <IonSelect 
                interface="popover" 
                value = {currentInput.maritalStatus}
                onIonChange = { e => onChangeHandler(e)}
                name = "maritalStatus"


                >
                    <IonSelectOption value={1}>Single</IonSelectOption>
                    <IonSelectOption value={2}>Widow</IonSelectOption>
                    <IonSelectOption value={3}>Widower</IonSelectOption>
                    <IonSelectOption value={4}>Merried</IonSelectOption>
                </IonSelect>
            </IonItem>
            
            <IonItem
            className="input"
            >
                <IonLabel >Religion : </IonLabel>
                <IonSelect 
                interface="popover" 
                value = {currentInput.religion}
                onIonChange = { e => onChangeHandler(e)}
                name = "religion"

                >
                    <IonSelectOption value={1}>Budha</IonSelectOption>
                    <IonSelectOption value={2}>Hindu</IonSelectOption>
                    <IonSelectOption value={3}>Islam</IonSelectOption>
                    <IonSelectOption value={4}>Kristen Protestan</IonSelectOption>
                    <IonSelectOption value={5}>Kristen Katholik</IonSelectOption>
                    <IonSelectOption value={6}>Kongfucu</IonSelectOption>
                </IonSelect>
            </IonItem>
            
            

            <IonItem
            className="input"
            >
            <IonLabel >Gender</IonLabel>
              <IonSelect
                // value = {currentInput.religion}
                // ref={genderInput}
              >
                <IonSelectOption value="male">Male</IonSelectOption>
                <IonSelectOption value="female">Female</IonSelectOption>
              </IonSelect>
            </IonItem>
  
            <IonButton
            onClick={handleSubmitVictim}
            className= "submitButton"
            >Submit</IonButton>
  
  
            <IonButton
            color= 'danger'
            >Cancel</IonButton>
  
            </IonList>
          {/* </IonContent> */}
        </IonContent>
      </IonPage>
    );
  };
  
  export default Edit;