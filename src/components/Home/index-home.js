import React, {useContext} from 'react'
import {AnimatePresence} from 'framer-motion' 
import {StepsContext} from '../../context/context'
import Onboarding from './Onboarding/index-onboarding'
import Estampado from './Estampado/index-estampado'
import Producto from './Producto/index-producto'
import Caracteristicas from './Caracteristicas/index-caracteristicas'
import Presupuesto from './Presupuesto/index-presupuesto'
import NavHome from './NavHome/index-navhome'

const Home = () => {

    // eslint-disable-next-line
    const [steps, setSteps] = useContext(StepsContext)

    return(
        <>
                <AnimatePresence>
                    {
                        steps.step === 0 &&
                        <Onboarding key="onboarging"/>
                    }
                    {
                        steps.step !== 0 &&
                        <NavHome key="navhome"/>
                    }
                    {
                        steps.step === 1 &&
                        <Estampado key="estampado"/>
                    }
                    {
                        steps.step === 2 &&
                        <Producto key="producto"/>
                    }
                    {
                        steps.step === 3 &&
                        <Caracteristicas key="caracteristicas"/> 
                    }
                    {
                        steps.step === 4 &&
                        <Presupuesto key="presupuesto"/>
                    }
                </AnimatePresence>
        </>
    )
}

export default Home