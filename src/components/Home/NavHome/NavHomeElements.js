import styled from 'styled-components/macro'
import {motion} from 'framer-motion'

export const NavHomeContainer = styled(motion.div)`
    width: 100%;
    height: 3rem;
    margin-top: 3rem;
`

export const NavHomeInner = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const NavHomeItems = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s ease-in-out;
    ${({active}) => active && 'background: rgba(215, 53, 86, 0.57)'};
    ${({clickable}) => clickable && 'background: rgba(107, 213, 213, 0.65)'};
    ${({clickable}) => clickable && 'cursor: pointer'};
    ${({active}) => !active && 'pointer-events: none'};

    &:hover {
        border-radius: 0;
        ${({active}) => active && 'background: rgba(215, 53, 86, 0.8)'};
        ${({clickable}) => clickable && 'background: rgba(107, 213, 213, 0.9)'};
    }
`