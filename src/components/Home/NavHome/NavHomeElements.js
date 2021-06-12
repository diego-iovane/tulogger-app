import styled from 'styled-components/macro'
import {motion} from 'framer-motion'

export const NavHomeContainer = styled(motion.div)`
    width: 100%;
    height: 3rem;
    margin-top: 3rem;

    @media screen and (max-width: 1050px) {
        margin-top: .5vw;
    }
`

export const NavHomeInner = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 650px) {
        width: 80%;   
    }
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

    @media screen and (max-width: 650px){
        font-size: 2.5vw;   
    }
`