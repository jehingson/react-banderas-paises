import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { ContextProvider } from './context/ContextProvider'
import PaisesList from './componentes/PaisesList'
import Pais from './componentes/Pais'
import Header from "./componentes/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  //const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' :
  'is-light-mode'

  /*
  function changeMedia(mq){
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

   useEffect(()=> {
    const mq = window.matchMedia('(prefers-color-scheme: drak)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, []) */
  

  return (
    <main className={mainClass}>
    <ContextProvider>
      <div className="App">
        <Router>
          <Header 
            setDarkMode={setDarkMode} 
            darkMode={darkMode}
            />
          <Switch>
            <Route exact path="/" >
              <PaisesList />
            </Route>
            <Route exact path="/pais/:id" >
              <Pais />
            </Route>
          </Switch>
        </Router>
      </div>
    </ContextProvider>
    </main>
  );
}

export default App;
