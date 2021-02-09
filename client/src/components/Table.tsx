import React from 'react';
import { IonGrid, IonList, IonContent } from '@ionic/react';

import BodyTable from './BodyTable'
import HeadTable from './HeadTable'
import './Table.css'

const Table: React.FC = () => (
  <IonContent>
    <IonGrid className= 'table-container'>
        <HeadTable />
          <BodyTable />
          <BodyTable />
          <BodyTable />
          <BodyTable />
          <BodyTable />
          <BodyTable />
          <BodyTable />
          <BodyTable />
          <BodyTable />
          <BodyTable />
          <BodyTable />
          <BodyTable />
          <BodyTable />
          <BodyTable />
    </IonGrid>
  </IonContent>
);

export default Table