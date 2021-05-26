import styled from 'styled-components'
import {motion} from 'framer-motion'

export const CaracteristicasContainer = styled(motion.div)`
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