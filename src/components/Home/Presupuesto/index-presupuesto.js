import React from 'react'
import {
    PresupuestoContainer
} from './PresupuestoElements'

const Presupuesto = () => {

    const presupuestoVariants = {
        initial: {
            opacity: 0
        },
        animate: {
           opacity: 1
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .1
            }
        }
    }

    return(
        <PresupuestoContainer
            variants={presupuestoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <h2>Presupuesto</h2>
        </PresupuestoContainer>
    )
}

export default Presupuesto