import styled from 'styled-components/macro'
import {motion} from 'framer-motion'
import onboardBack from '../../../media/serigrafia1.jpg'

export const onboardingVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .4
        }
    }
}

export const OnboardingContainer = styled(motion.div)`
    width: 100%;
    height: 88.7vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url(${onboardBack});
    background-size: cover;
`

export const OnboardingInner = styled.div`
    position: relative;
`

export const OnboardingSignA = styled.div`
    background: rgba(215, 53, 86, 0.57);
    font-size: 4.5rem;
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    min-height: 20vh;
    position: relative;
    right: 5rem;
`

export const OnboardingSignB = styled.div`
    background: rgba(215, 53, 86, 0.57);
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    padding-right: 7rem;
    min-height: 20vh;
    position: relative;
    // left: 1rem;
`