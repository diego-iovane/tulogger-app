import styled from 'styled-components/macro'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

export const NavContainer = styled.div`
    width: 100%;
    font-weight: bold;
    height: 4.5rem;
`

export const NavInner = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
`

export const LogoContainer = styled.div`
    position: relative;
    width: 40%;
`

export const Logo = styled(Link)`
    color: #D73457;
    text-decoration: none;
    font-size: 63px;
    font-weight: bold;

    @media screen and (max-width: 1050px){
        font-size: 5vw;
    }

    @media screen and (max-width: 650px){
        font-size: 7vw;
    }
`

export const LogoAlt = styled.a`
    color: #D73457;
    text-decoration: none;
    font-size: 63px;
    font-weight: bold;
    cursor: pointer;

    @media screen and (max-width: 1050px){
        font-size: 5vw;
    }

    @media screen and (max-width: 650px){
        font-size: 7vw;
    }

`

export const LogoImage = styled.img`
    width: 3rem;

    @media screen and (max-width: 1050px){
        width: 4vw;
    }

    @media screen and (max-width: 650px){
        display: none;
    }
`

export const Nav = styled.nav`

    ul {
        list-style-type: none;
        display: flex;
        margin: 0;
        padding: 0;
        height: 11vh;
    }
    
    li {
        flex: 1 0 auto;
        height: 100%;
        display: flex;
    }

    @media screen and (max-width: 1050px) {
        display: none;
    }

    @media screen and (max-width: 650px){

    }
    
`

export const NavLink = styled(motion(Link))`
    text-decoration: none;
    color: #D73457;
    padding: 0vw 2vw;
    font-size: clamp(1rem, .5rem + 2vw, 3rem);
    align-self: flex-end;
    line-height: 22px;
    position: relative;
    z-index: 10;
`

export const hoverVariants = {
    initial: {
       width: 0 
    },
    animate: {
        width: '100%',
        transition: {
            type: "Inertia",
            duration: .5
        }
    },
    exit: {
        width: 0,
        transition: {
            type: "Inertia",
            duration: .2
        }
    }
}

export const AnimHover = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #6BD5D5; 
    opacity: 0.5;  
`

export const MobileNavIcon = styled.div`
    display: none;

    @media screen and (max-width: 1050px) {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        svg {
            font-size: clamp(1.2rem, 1rem + 1.5vw, 3rem);
        }
    }
`

export const MobileNav = styled(motion.div)`
    display: none;
    
    @media screen and (max-width: 1050px) {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: white;
        z-index: 999;
    }
`

export const MobileNavInner = styled.div`
    width: 50%;

    ul {
        list-style-type: none;
    }

    li {
        text-align: center;
        margin-top: .5rem;
    }
`

export const CloseMobileMenu = styled.div`
    cursor: pointer;
    font-size: clamp(1.2rem, 1rem + 1.5vw, 3rem);
`

export const ContactNavContainer = styled.div`
    width: 55%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 0;
    right: .5rem;
`

export const ContactNavItem = styled.div`
    display: flex;

    span {
        font-size: clamp(.3rem, .3rem + .7vw, 5rem);
        display: flex;
        align-items: center;
        margin-left: .2rem;

        @media screen and (max-width: 1050px) {
            display: none;
        }
    }
`

export const MobileContactNav = styled.div`
    display: none;

    @media screen and (max-width: 1050px) {
        display: flex;
    }
`

export const Icons = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        line-height: 50%;

        svg {
            font-size: clamp(.5rem, 1rem + 1vw, 4rem);
            color: black;
        }
    }

    span {
        font-size: clamp(.5rem, 1rem + 1vw, 4rem);
        color: black;
    }
`