import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Calcul from './components/Calcul';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<React.StrictMode><Calcul /></React.StrictMode>,document.getElementById('calcul'));

serviceWorker.unregister();
