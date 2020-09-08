import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } from 'react-router-dom'
import {ContextProvider} from './context/ContextProvider'
import PaisesList from './componentes/PaisesList'
import Pais from './componentes/Pais'


function App() {
  return (
    <ContextProvider>
    <div className="App">
      <Router>
        <Switch>
       
        <Route 
          exact 
          path="/"
          component={PaisesList}
        />
        <Route 
          exact 
          path="/pais/:id"
          component={Pais}
          />
          
        </Switch>
      </Router> 
    </div>
    </ContextProvider>
  );
}

export default App;
