import React, {useContext} from 'react'
import {StepsContext} from '../../../context/context'
import {handleStep} from '../../utils/utils'
import {
    StepsContainer,
    StepsInner,
    StepsItems
} from './StepsNavElements'

const StepsNav = () => {

    const [steps, setSteps] = useContext(StepsContext)

    return(
        <StepsContainer>
            <StepsInner>
                <StepsItem></StepsItem>
            </StepsInner>
        </StepsContainer>
    )
}

export default StepsNav