import React from 'react'
import {
    CaracteristicasContainer
} from './CaracteristicasElements'

const Caracteristicas = () => {

    const caracteristicasVariants = {
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
        <CaracteristicasContainer
            variants={caracteristicasVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <h2>Caracteristicas</h2>
        </CaracteristicasContainer>
    )
}

export default Caracteristicas