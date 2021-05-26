import React, {useContext} from 'react'
import { AnimatePresence } from 'framer-motion' 
import {StepsContext} from '../../context/context'
import Onboarding from './Onboarding/index-onboarding'
import Estampado from './Estampado/index-estampado'
import Producto from './Producto/index-producto'
import Caracteristicas from './Caracteristicas/index-caracteristicas'
import Cantidad from './Cantidad/index-cantidad'
import Presupuesto from './Presupuesto/index-presupuesto'

const Home = () => {

    // eslint-disable-next-line
    const [steps, setSteps] = useContext(StepsContext)

    return(
        <>
                <AnimatePresence>
                    {
                        steps.step === 0 &&
                        <Onboarding />
                    }
                    {
                        steps.step === 1 &&
                        <Estampado />
                    }
                    {
                        steps.step === 2 &&
                        <Producto />
                    }
                    {
                        steps.step === 3 &&
                        <Caracteristicas />
                        // CANTIDAD DE COLOR DE ESAMPADO CON RADIO BUTTONS Y DE FRENE - DORSO - FRETE/DORSO 
                    }
                    {
                        steps.step === 4 &&
                        <Cantidad />
                    }
                    {
                        steps.step === 5 &&
                        <Presupuesto />
                    }
                </AnimatePresence>
        </>
    )
}

export default Home