import React from 'react'
import styled from 'styled-components/macro'
import {motion} from 'framer-motion'
import {FaWindowClose} from 'react-icons/fa'


const popContainerVariants = { 
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    }
}

const popInnerVariants = {
    initial: {
        opacity: 0,
        x: -100
    },
    animate: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: 100
    }
}

const PopContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 800;
`
const PopInner = styled(motion.div)`
    width: calc(10rem + 26vw);
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 5px;
    padding: 1rem;
    z-index: 900;
    position: relative;

`

const CloseButton = styled.div`
    position: absolute;
    top: 3px;
    right: 4px;
    cursor: pointer;
    
    svg {
        color: black;
    }
`

const PopUp = ({children, handleClose}) => {


    const handleClick = () => {
        handleClose()
    }

    return(
        <PopContainer 
            variants={popContainerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <PopInner
                variants={popInnerVariants}
            >
               {children}
                <CloseButton onClick={handleClick}>
                    <FaWindowClose />
                </CloseButton>
            </PopInner>
        </PopContainer>
    )
}

export default PopUp