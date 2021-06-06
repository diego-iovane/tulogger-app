import styled from 'styled-components/macro'
import {motion} from 'framer-motion'


export const presupuestoVariants = {
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

export const PresupuestoContainer = styled(motion.div)`
    width: 100%;
    height: 50vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 6vw;

    h2 {
        margin-bottom: 5vw;
    }
`

export const ContainerLeft = styled.div``

export const ContainerRight = styled.div``

export const DetallesContainer = styled.div`

`

export const DetallesInner = styled.div`
`
export const ResetBudget = styled(motion.button)`
    border: none;
    cursor: pointer;
`