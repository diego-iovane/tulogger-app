import styled from 'styled-components'
import {motion} from 'framer-motion'

export const caracteristicasVariants = {
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
 
export const CaracContainer = styled(motion.div)`
    width: 90%;
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

export const CaracInner = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
`

export const CaracImageContainer = styled.div`
    width: 50%;
`

export const CaracImage = styled.img`
    height: 16rem;
    object-fit: contain;
`

export const CaracDetailsContainer = styled.div`
    width: 70%;
    display: flex;
`

export const DetailsLeft = styled.div``

export const DetailsRight = styled.div``


export const nextButtonVariants = {
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

export const NextButton = styled(motion.button)`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    background: #6BD5D5;
    color: white;
    border: none;
    height: 5rem;
    width: 2rem;
    cursor: pointer;


`

