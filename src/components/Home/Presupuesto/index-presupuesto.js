import React, {useState, useEffect, useContext} from 'react'
import {Selected, StepsContext} from '../../../context/context'
import {calculateLogoPrice} from '../utils/utils'
import DetallesList from './index-detalles'
import ContactDetails from './index-contactdetails'
import CountAnimation from './index-countanim'
import ContactoWhats from './index-contactowhats'
import {
    presupuestoVariants,
    PresupuestoContainer,
    PresupuestoInner,
    ContainerLeft,
    ContainerRight,
    DetallesContainer,
    DetallesInner,
    DetallesImg,
    Counter,
    CounterContainer,
    // ResetBudget
} from './PresupuestoElements'

const Presupuesto = () => {

    const [selected, setSelected] = useContext(Selected)
    // eslint-disable-next-line
    const [steps, setSteps] = useContext(StepsContext)
    const [total, setTotal] = useState(0)

    const handleSetTotal = () => {

        const logoPrice = calculateLogoPrice(selected)
        setTotal(logoPrice + selected.precioUnidad)

    }

    useEffect(() => {
        handleSetTotal()
    }, [])

    useEffect(() => {
        setSelected({
            ...selected,
            total: total
        })
    }, [total])

    return(
        <PresupuestoContainer
            variants={presupuestoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <h2>Presupuesto</h2>
            <PresupuestoInner>
                <ContainerLeft>
                    <DetallesContainer>
                        <CounterContainer>
                            <Counter>
                            $
                            {
                                total !== 0 && <CountAnimation>{total}</CountAnimation>
                            }
                            </Counter>
                            <p>(precio por unidad)</p>
                        </CounterContainer>
                        <DetallesInner>
                            <DetallesImg src={selected.imagen} alt="detalles producto presupuesto"/>
                            <DetallesList selected={selected}/>
                        </DetallesInner>
                    </DetallesContainer>
                </ContainerLeft>
                <ContainerRight>
                    <ContactDetails selected={selected}/>
                    <ContactoWhats />
                </ContainerRight>
                {/* <ResetBudget onClick={handleReset}>Hacer otro presupuesto</ResetBudget> */}
            </PresupuestoInner>
        </PresupuestoContainer>
    )
}

export default Presupuesto