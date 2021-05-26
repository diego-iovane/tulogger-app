import React from 'react'
import Start from './index-start'
import {
    onboardingVariants,
    OnboardingContainer,
    OnboardingSignB,
    OnboardingSignA,
    OnboardingInner
} from './OnboardingElements'

const Onboarding = () => {

    return(
        <OnboardingContainer
            variants={onboardingVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <OnboardingInner>
                <OnboardingSignA>
                    ESTAMPADOS
                </OnboardingSignA>   
                <OnboardingSignB>
                    SIMUL@ TU PRESUPUESTO
                </OnboardingSignB>
                <Start />
            </OnboardingInner>
        </OnboardingContainer>
    )
}

export default Onboarding