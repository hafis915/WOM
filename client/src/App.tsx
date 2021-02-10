import { Redirect, Route } from 'react-router-dom';
import { 
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonApp,
  IonRouterOutlet 
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Provider } from 'react-redux'
// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import AddForm from './pages/AddForm'
import Edit from './pages/Editpages'

// store
import store from './store'

// Icon

import { peopleOutline, accessibilityOutline, statsChartOutline, addOutline } from 'ionicons/icons';

// My CSS
import './App.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <Provider  store = {store}>
  <IonApp className = "Ion-App">
  <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>


          <Route exact path="/" component= {Home} />
          <Route exact path="/dashboard"  component={Dashboard} />
          <Route exact path="/addData" component= {AddForm} />
          <Route exact path="/edit/:id" component = {Edit} />
          <Route exact path="/" >
            <Redirect to="/dashboard" />
          </Route>


        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="dashboard" href="/dashboard">
            <IonIcon icon={accessibilityOutline} />
            <IonLabel>Dukcapil Data</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab2" href="/addData">
            <IonIcon icon={addOutline} />
            <IonLabel>Add Data</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
  </IonReactRouter>
</IonApp>
</Provider>
);

export default App;
