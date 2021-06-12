import styled from 'styled-components/macro'
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    h2 {
        margin-bottom: 3rem;
        margin-top: 1rem;

        @media screen and (max-width: 1050px) {
            margin-bottom: 2rem;
        }

        @media screen and (max-width: 650px) {
            margin: 0 auto;
            font-size: clamp(.3rem, .5rem + 3vw, 2rem);
            width: 80%;
            text-align: center;
        }
    }
`

export const CaracInner = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 650px) {
        flex-direction: column;
    }
`

export const CaracImageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1050px) {
        width: 35%;
    }

    @media screen and (max-width: 650px) {
        width: 90%;
        height: calc(6rem + 10vw);
        align-self: center;
    }
`

export const CaracImage = styled.img`
    max-height: calc(8rem + 13vw);
    object-fit: contain;
`

export const CaracDetailsContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;

    h3 {
        
        @media screen and (max-width: 1050px) {
            font-size: calc(.5rem + 1vw);
        }
    }

    @media screen and (max-width: 650px) {
        flex-direction: column;
        width: calc(5rem + 63vw);
        margin: 0 auto;
    }
`

export const DetailsLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 650px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const DetailsRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 650px) {
        flex-direction: row;
        justify-content: space-between;
    }
`


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
    border-radius: 50%;
    right: 1rem;
    transform: translateY(-50%);
    background: #6BD5D5;
    color: white;
    border: none;
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        color: white;
        font-size: 1.5rem;
    }

    @media screen and (max-width: 650px) {
        top: 25%;
    }
`

