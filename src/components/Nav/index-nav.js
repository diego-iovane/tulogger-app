import React, {useEffect, useState, useContext} from 'react'
import {AnimatePresence} from 'framer-motion'
import {StepsContext} from '../../context/context'
import {handleReturn} from '../Home/utils/utils'
import HoverableLink from './index-hoverable-link'
import {useLocation} from 'react-router-dom'
import {FaWhatsappSquare} from 'react-icons/fa'
import {SiMailDotRu} from 'react-icons/si'
import {TiSocialInstagram} from 'react-icons/ti'
import {AiFillFacebook, AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import LogoImg from '../../media/logoB.jpg'
import {
    NavContainer,
    NavInner,
    LogoContainer,
    Logo,
    LogoAlt,
    LogoImage,
    Nav,
    ContactNavContainer,
    ContactNavItem,
    Icons,
    MobileContactNav,
    MobileNavIcon,
    MobileNav, 
    MobileNavInner,
    CloseMobileMenu
} from './NavElements'

const NavBar = () => {

    const {pathname} = useLocation()
    const [isHome, setIsHome] = useState(false)
    // eslint-disable-next-line
    const [steps, setSteps] = useContext(StepsContext)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        
        pathname === '/' ? setIsHome(true) : setIsHome(false)

    }, [pathname])

    const handleClick = () => {
        handleReturn(0, setSteps)
    }

    const handleMenuOpen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <NavContainer>
            <NavInner>
                <ContactNavContainer>
                    <ContactNavItem>
                        {/* eslint-disable-next-line */}
                        <Icons><a href=""><FaWhatsappSquare /></a></Icons>
                        <span>Whats => </span>
                        <span>+5491170543029</span>
                    </ContactNavItem>
                    <ContactNavItem>
                        <Icons><span><SiMailDotRu /></span></Icons>
                        <span>e-mail => </span>
                        <span>tuloggerventas@gmail.com</span>
                    </ContactNavItem>
                    <ContactNavItem>
                        <span>Redes => </span>
                        <Icons>
                            {/* eslint-disable-next-line */}
                            <a href="https://www.instagram.com/tulogger_indumentaria/" target="_blank"><TiSocialInstagram /></a>
                            {/* eslint-disable-next-line */}
                            <a href="https://www.facebook.com/Tulogger-110563974583998" target="_blank"><AiFillFacebook /></a>
                        </Icons>
                    </ContactNavItem>
                    <MobileContactNav>
                        {/* eslint-disable-next-line */}
                        <Icons><a href=""><AiFillFacebook /></a></Icons>
                        {/* eslint-disable-next-line */}
                        <Icons><a href=""><FaWhatsappSquare /></a></Icons>
                        {/* eslint-disable-next-line */}
                        <Icons><a href=""><TiSocialInstagram /></a></Icons>
                    </MobileContactNav>
                </ContactNavContainer>
                <LogoContainer>
                    <LogoImage src={LogoImg} />
                    {
                        isHome ? 
                        <LogoAlt onClick={handleClick}>TuLogger</LogoAlt>:
                        <Logo to="/">TuLogger</Logo>
                    }
                </LogoContainer>
                <Nav>
                    <ul>
                        <li>
                            <HoverableLink to="/tecnicas">Técnicas</HoverableLink>
                        </li>
                        <li>
                            <HoverableLink to="/nosotros">Nosotros</HoverableLink>
                        </li>
                    </ul>
                </Nav>
                
                <MobileNavIcon onClick={handleMenuOpen}>
                    <AiOutlineMenu />
                </MobileNavIcon>
                
                <AnimatePresence>
                    {
                        isOpen &&
                        <MobileNav>
                            <MobileNavInner>
                            <ul>
                                <li>
                                    <HoverableLink to="/tecnicas">Técnicas</HoverableLink>
                                </li>
                                <li>
                                    <HoverableLink to="/nosotros">Nosotros</HoverableLink>
                                </li>
                                <li>
                                    <CloseMobileMenu>
                                        <GrClose onClick={handleMenuOpen}/>
                                    </CloseMobileMenu>
                                </li>
                            </ul>
                            </MobileNavInner>
                        </MobileNav>
                    }
                </AnimatePresence>
            </NavInner>
        </NavContainer>
    )
}

export default NavBar