import React, {useContext} from 'react'
import {StepsContext} from '../../../context/context'
import {handleReturn} from '../utils/utils'
import {
    NavHomeContainer,
    NavHomeInner,
    NavHomeItems
} from './NavHomeElements'

const NavHome = () => {

    const [steps, setSteps] = useContext(StepsContext)

    return(
        <NavHomeContainer>
            <NavHomeInner>
                <NavHomeItems 
                    active={steps.step >= 1 && true}
                    clickable={steps.step >= 2 && true}
                    onClick={() => handleReturn(1, setSteps)}
                >Técnica</NavHomeItems>
                <NavHomeItems 
                    active={steps.step >= 2 && true}
                    clickable={steps.step >= 3 && true}
                    onClick={() => handleReturn(2, setSteps)}
                >Prenda</NavHomeItems>
                <NavHomeItems 
                    active={steps.step >= 3 && true}
                    clickable={steps.step >= 4 && true}
                    onClick={() => handleReturn(3, setSteps)}
                >Características</NavHomeItems>
                <NavHomeItems 
                    active={steps.step >= 4 && true}
                >Presupuesto</NavHomeItems>
            </NavHomeInner>
        </NavHomeContainer>
    )
}

export default NavHome