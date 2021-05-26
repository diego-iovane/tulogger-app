import React from 'react'
import { CantidadContainer } from './CantidadElements'

const Cantidad = () => {

    const cantidadVariants = {
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
        <CantidadContainer
            variants={cantidadVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <h2>Cantidad dividida por rangos</h2>
        </CantidadContainer>
    )
}

export default Cantidad