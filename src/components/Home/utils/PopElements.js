import styled from 'styled-components'
import {motion} from 'framer-motion'

export const PopContainer = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 10rem;
    height: 5rem;
    border-radius: 15px 15px 0 0;
    background: rgba(107, 213, 213, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PopInner = styled.p`

`