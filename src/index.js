import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import SuccessPage from './components/success/SuccessPage'
import Error from './components/error/Error'
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import { PageDown } from './components/pagedown/PageDown';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Switch>  
  <Route path="/success" exact children={<SuccessPage url={window.location.host} />} />
  <Route path="/error" exact children={<Error />} />  
  <Route path="/down" exact children={<PageDown />} />          
  <Route path="/" exact children={<App />} />
  <Route path="/:id" exact children={<App />} />      
   </Switch>
</BrowserRouter>
);

reportWebVitals();
