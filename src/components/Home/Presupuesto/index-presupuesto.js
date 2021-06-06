import React, {useContext} from 'react'
import {Selected, StepsContext} from '../../../context/context'
import DetallesList from './index-detalles'
import ContactDetails from './index-contactdetails'
import CountAnimation from './index-countanim'
import {
    presupuestoVariants,
    PresupuestoContainer,
    ContainerLeft,
    ContainerRight,
    DetallesContainer,
    DetallesInner,
    ResetBudget
} from './PresupuestoElements'

const Presupuesto = () => {

    const [selected, setSelected] = useContext(Selected)
    const [steps, setSteps] = useContext(StepsContext)

    const handleReset = () => {
        setSelected({
            tecnica: "",
            producto: "",
            imagen: "",
            coloresDisponibles: "",
            color: "",
            cantidad: "",
            size: "",
            ubicacion: "",
        })

        setSteps({step: 0})
    }

    return(
        <PresupuestoContainer
            variants={presupuestoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <h2>Presupuesto</h2>
            <ContainerLeft>
                <DetallesContainer>
                    <h5>
                        <span>$</span><CountAnimation>500</CountAnimation>
                    </h5>
                    <DetallesInner>
                        <DetallesList selected={selected}/>
                    </DetallesInner>
                </DetallesContainer>
            </ContainerLeft>
            <ContainerRight>
                <p>Contactame para materializar este proyecto</p>
                <ContactDetails selected={selected}/>
            </ContainerRight>
            <ResetBudget onClick={handleReset}>Hacer otro presupuesto</ResetBudget>
        </PresupuestoContainer>
    )
}

export default Presupuesto