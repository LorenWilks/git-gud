import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './Components/App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);
