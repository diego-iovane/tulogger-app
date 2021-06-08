import React, {useState} from 'react'
import NavBar from './components/Nav/index-nav'
import Home from './components/Home/index-home'
import Trabajos from './components/Trabajos/index-trabajos'
import Contacto from './components/Contacto/index-contacto'
import Nos from './components/Nos/index-nos'
import {Switch, Route} from  'react-router-dom'
import {StepsContext} from './context/context'
import {Selected} from './context/context'

function App() {

  const [steps, setSteps] = useState({
    step: 2,
  })
  const [selected, setSelected] = useState({
    tecnica: "",
    producto: "",
    precioUnidad: 0,
    imagen: "",
    color: "",
    coloresDisponibles: "",
    cantidad: "",
    size: "",
    ubicacion: "",
    total: 0
  })

  console.log(selected)

  return (
    <StepsContext.Provider value={[steps, setSteps]}>
      <Selected.Provider value={[selected, setSelected]}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/trabajos">
            <Trabajos />
          </Route>
          <Route exact path="/contacto">
            <Contacto />
          </Route>
          <Route exact path="/nosotros">
            <Nos />
          </Route>
        </Switch>
      </Selected.Provider>
    </ StepsContext.Provider>
  );
}

export default App;
