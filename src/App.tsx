import React from 'react';

import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
} from '@ionic/react';

import {
  IonReactRouter,
} from '@ionic/react-router';

import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';
import Result from './pages/Result';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>

      <IonReactRouter>

        <IonRouterOutlet>

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/result" element={<Result />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>

        </IonRouterOutlet>

      </IonReactRouter>

    </IonApp>
  );
};

export default App;