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
    IonSelectOption
   } from '@ionic/react';
  import './Addform.css';
import React, {useRef, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addData } from '../store/action'
import { useHistory, useParams } from 'react-router-dom'




const Addform: React.FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    // data
    const nikInput = useRef<HTMLIonInputElement>(null)
    const maidenNameInput = useRef<HTMLIonInputElement>(null)
    const nameInput = useRef<HTMLIonInputElement>(null)
    const birthDateInput = useRef<HTMLIonInputElement>(null)
    const maritalStatusInput = useRef<HTMLIonSelectElement>(null)
    const religionInput = useRef<HTMLIonSelectElement>(null)
    const genderInput = useRef<HTMLIonSelectElement>(null)
  
    const handleSubmitVictim = () => {
      const NIK = (nikInput.current?.value)
      const name = (nameInput.current?.value)
      const maidenName = maidenNameInput.current?.value
      const birthDate= (birthDateInput.current?.value)
      const maritalStatus =(maritalStatusInput.current?.value)
      const religion = (religionInput.current?.value)
      const gender = genderInput.current?.value

      const payload = {
        NIK,
        name,
        maidenName,
        birthDate,
        maritalStatus,
        religion,
        // gender,

      }
      console.log(payload)
      dispatch(addData(payload))
      history.push("/dashboard")
      
    }
  
  
    return (
      <IonPage>
        <IonHeader
        className="addVictimHeader"
        >
          <IonToolbar
          className = "name"
          >
            <IonTitle
            className="title"
            >Add New Data</IonTitle>
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
              <h4>Add New Dukcapil Data</h4>

            <IonItem
            className="input"
            >
              <IonLabel position="stacked">NIK</IonLabel>
              <IonInput
                ref={nikInput}
                type="number"
                placeholder="468464645645"
               ></IonInput>
            </IonItem>
  
            
            <IonItem
            className="input"
            >
              <IonLabel position="stacked">Name</IonLabel>
              <IonInput
                ref={nameInput}
                type="text"
                placeholder="John"
               ></IonInput>
            </IonItem>

            <IonItem
            className="input"
            >
              <IonLabel position="stacked">Maiden Name</IonLabel>
              <IonInput
                ref={maidenNameInput}
                type="text"
                placeholder="John"
               ></IonInput>
            </IonItem>

            <IonItem
            className="input"
            >
              <IonLabel position="stacked">Birth Date</IonLabel>
              <IonInput 
              ref={birthDateInput}
              type='date'
            //   placeholder={"Makassar"}
              /> 
            </IonItem>
  
            <IonItem
            className="input"
            
            >
                <IonLabel>Marital Status : </IonLabel>
                <IonSelect interface="popover" ref={maritalStatusInput}>
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
                <IonSelect interface="popover" ref={religionInput} >
                    <IonSelectOption value={5}>Budha</IonSelectOption>
                    <IonSelectOption value={6}>Hindu</IonSelectOption>
                    <IonSelectOption value={3}>Islam</IonSelectOption>
                    <IonSelectOption value={7}>Kristen Protestan</IonSelectOption>
                    <IonSelectOption value={4}>Kristen Katholik</IonSelectOption>
                    <IonSelectOption value={8}>Kongfucu</IonSelectOption>
                </IonSelect>
            </IonItem>
            
            

            <IonItem
            className="input"
            >
            <IonLabel >Gender</IonLabel>
              <IonSelect
              ref={genderInput}
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
  
  export default Addform;