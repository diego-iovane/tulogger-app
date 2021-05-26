import styled from 'styled-components/macro'
import {motion} from 'framer-motion'

export const EstampadoContainer = styled(motion.div)`
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

export const EstampadoInner = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;    
`

export const EstampadoCard = styled(motion.div)`
    width: 23vw;
    height: auto;
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 1vw;
    cursor: pointer;

    &:hover {
        border: 1px solid rgba(0,0,0,0.4);
    }

    img {
        width: 12vw;
    }
    
    //Select all child elements
    &>* {
        pointer-events: none;
    }
`
