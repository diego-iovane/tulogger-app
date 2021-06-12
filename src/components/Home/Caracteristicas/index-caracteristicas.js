import React, {useEffect, useContext, useState} from 'react'
import {AnimatePresence} from 'framer-motion'
import {Selected, StepsContext} from '../../../context/context'
import {handleStep} from '../utils/utils'
import RadioColors from './index-radiocolors'
import Cantidades from './index-cantidades'
import LogoSize from './index-logosize'
import LogoPosition from './index-logoposition'
import {GrFormNext} from 'react-icons/gr'
import {
    caracteristicasVariants,
    CaracContainer,
    CaracInner,
    CaracImageContainer,
    CaracDetailsContainer,
    CaracImage,
    DetailsLeft,
    DetailsRight,
    NextButton,
    nextButtonVariants
} from './CaracteristicasElements'
import {handleComplete} from '../utils/utils'

const Caracteristicas = () => {

    const [selected, setSelected] = useContext(Selected)
    const [steps, setSteps] = useContext(StepsContext)
    const [nextButton, setNextButton] = useState(false)

    const handleClick = () => {
        handleStep(steps, setSteps)
    }

    useEffect(() => {

        handleComplete(selected, setNextButton)

    }, [selected])

    return(
        <CaracContainer
            variants={caracteristicasVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <h2>Caracteristicas</h2>
            <CaracInner>
                <CaracImageContainer>
                    <CaracImage src={selected.imagen}/>
                </CaracImageContainer>
                <CaracDetailsContainer>
                    <DetailsLeft>
                        <RadioColors 
                            colors={selected.coloresDisponibles}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Cantidades />
                    </DetailsLeft>
                    <DetailsRight>
                        <LogoSize />
                        <LogoPosition />
                    </DetailsRight>
                </CaracDetailsContainer>
            </CaracInner>
            <AnimatePresence>
                {
                    nextButton && 
                    <NextButton
                        variants={nextButtonVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onClick={handleClick}
                    ><GrFormNext /></NextButton>
                }
            </AnimatePresence>
        </CaracContainer>
    )
}

export default Caracteristicas