import React, {useState, useEffect, useContext} from 'react'
import {Selected, StepsContext} from '../../../context/context'
import {calculateLogoPrice} from '../utils/utils'
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
    // eslint-disable-next-line
    const [steps, setSteps] = useContext(StepsContext)
    const [total, setTotal] = useState(0)

    const handleSetTotal = () => {

        const logoPrice = calculateLogoPrice(selected)
        setTotal(logoPrice + selected.precioUnidad)

    }

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
            precioUnidad: 0,
            total: 0
        })

        setSteps({step: 0})
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
            <ContainerLeft>
                <DetallesContainer>
                    <h5>
                        <span>$</span>
                        {
                            total !== 0 && <CountAnimation>{total}</CountAnimation>
                        }
                        <span>(precio por unidad)</span>
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