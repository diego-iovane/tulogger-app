import React, {useState} from 'react'
import NavBar from './components/Nav/index-nav'
import Home from './components/Home/index-home'
import Tecnicas from './components/Tecnicas/index-tecnicas'
import Nos from './components/Nos/index-nos'
import {Switch, Route} from  'react-router-dom'
import {StepsContext} from './context/context'
import {Selected} from './context/context'

function App() {

  const [steps, setSteps] = useState({
    step: 0,
  })
  const [selected, setSelected] = useState({
    // tecnica: "estampado",
    // producto: "Buzo Algodon Canguro",
    // precioUnidad: 775,
    // imagen: "https://firebasestorage.googleapis.com/v0/b/seba-app.appspot.com/o/prendasImages%2Fbuzo-algodon-cangurojpg.jpg?alt=media&token=cceac1fc-7b64-419d-a003-8513a4bdaec4",
    // color: "azul-francia",
    // coloresDisponibles: "",
    // cantidad: "A",
    // size: "small",
    // ubicacion: "dorso",
    // total: 0

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
          <Route exact path="/tecnicas">
            <Tecnicas />
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
