import React, {useContext} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {handleStep} from '../utils/utils'
import {StepsContext} from '../../../context/context'

const Start = () => {

    const [steps, setSteps] = useContext(StepsContext)

    const StartContainer = styled(motion.div)`
        width: 7rem;
        height: 15rem;
        position: absolute;
        background: rgba(107, 213, 213, 0.65);
        top: 6rem;
        right: -1rem;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(180deg);
        cursor: pointer;
        font-size: 4rem;
        color: white;
    `
    const handleClick = () => {
        handleStep(steps, setSteps)
    }

    return(
        <StartContainer onClick={handleClick} >
            <IoArrowBackCircleOutline />
        </StartContainer>
    )
}

export default Start