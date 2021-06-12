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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        margin-bottom: .5rem;
        margin-top: 1rem;

        @media screen and (max-width: 1050px) {
            margin-bottom: .1rem;
            margin-top: .3rem;
        }

        @media screen and (max-width: 650px) {
            font-size: calc(1rem + 1vw);
        }
    }
`
export const PresupuestoInner = styled.div`
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1050px) {
        // flex-direction: row;
    }

    @media screen and (max-width: 650px) {
        width: 96%;
    }
`

export const ContainerLeft = styled.div`
    width: 60%;

    @media screen and (max-width: 1050px){
        width: 80%;
    }

    @media screen and (max-width: 650px){
        width: 100%;
    }
`

export const DetallesContainer = styled.div`
    width: 100%;
`

export const CounterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    p {
        margin: 0;

        @media screen and (max-width: 1050px){
            font-size: calc(.2rem + 1vw);
        }
    }
`

export const Counter = styled.p`
    font-size: 3rem;
    margin: 0;

    @media screen and (max-width: 1050px){
        font-size: calc(1rem + 2vw) !important;
    }
`

export const ContainerRight = styled.div`
    width: 60%;

    @media screen and (max-width: 1050px){
        margin-top: 3vw;
    }

    @media screen and (max-width: 650px){
        width: 90%;
    }
`


export const DetallesInner = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 1050px) {
        justify-content: center;
    }

    ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 5rem;
        align-self: center;

        @media screen and (max-width: 1050px) {
            height: 100%;
        }

        @media screen and (max-width: 650px) {
            padding: 0;
            margin-left: 1vw;
        }
    }

    li {
        margin-right: 1.5rem;

        @media screen and (max-width: 1050px) {
            font-size: calc(0.5rem + 0.5vw);
        }

        @media screen and (max-width: 650px) {
            margin: 0;
        }
    }
`

export const DetallesImg =styled.img`
    max-height: calc(6rem + 10vw);
    object-fit: contain;

    @media screen and (max-width: 650px) {
        align-self: center;
    }
`

export const ResetBudget = styled(motion.button)`
    border: none;
    cursor: pointer;
`