import React from 'react';
import { IonGrid, IonList, IonContent } from '@ionic/react';

import BodyTable from './BodyTable'
import HeadTable from './HeadTable'
import './Table.css'

const Table: React.FC<{data : any}> = ({data}) => {
  const dukcapilData = data.dukcapilData
  console.log(dukcapilData, 'ini di table')
  if (dukcapilData.length === 0 ){
    console.log("Masih loading", dukcapilData)
    return <h1>Loading</h1>
  }
  return (
  <IonContent>
    <IonGrid className= 'table-container'>
        <HeadTable />
        {dukcapilData.map( (element:any,idx:any) =>{
         return ( <BodyTable 
          key = {idx}
          element = {element}
          />)
        })}
    </IonGrid>
  </IonContent>
  )

}
export default Table