import styled from 'styled-components'
import {motion} from 'framer-motion'

export const ForwardContainer = styled(motion.div)`
    background: rgba(107, 213, 213, 0.65);
    height: 20rem;
    width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
    
export const ForwardArrow = styled.div`
    transform: translateY(-50%);
    transform: rotate(180deg);
    cursor: pointer;
    font-size: 3rem;
    color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    // Compensar anomalia
    position: relative;
    bottom: 0.5rem;
`