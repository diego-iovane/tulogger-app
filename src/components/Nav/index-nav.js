import React, {useEffect, useState, useContext} from 'react'
import {StepsContext} from '../../context/context'
import {handleReturn} from '../Home/utils/utils'
import HoverableLink from './index-hoverable-link'
import {useLocation} from 'react-router-dom'
import {FaWhatsappSquare} from 'react-icons/fa'
import {SiMailDotRu} from 'react-icons/si'
import {TiSocialInstagram} from 'react-icons/ti'
import {TiSocialFacebook} from 'react-icons/ti'
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
} from './NavElements'

const NavBar = () => {

    const {pathname} = useLocation()
    const [isHome, setIsHome] = useState(false)
    // eslint-disable-next-line
    const [steps, setSteps] = useContext(StepsContext)

    useEffect(() => {
        
        pathname === '/' ? setIsHome(true) : setIsHome(false)

    })

    const handleClick = () => {
        handleReturn(0, setSteps)
    }

    return(
        <NavContainer>
            <NavInner>
                <ContactNavContainer>
                    <ContactNavItem>
                        {/* eslint-disable-next-line */}
                        <Icons><a href=""><FaWhatsappSquare /></a></Icons>
                        <span>Whats => </span>
                        <span>+5491154043433</span>
                    </ContactNavItem>
                    <ContactNavItem>
                        <Icons><span><SiMailDotRu /></span></Icons>
                        <span>e-mail => </span>
                        <span>email@email.com</span>
                    </ContactNavItem>
                    <ContactNavItem>
                        <span>Redes => </span>
                        <Icons>
                            {/* eslint-disable-next-line */}
                            <a href=""><TiSocialInstagram /></a>
                            {/* eslint-disable-next-line */}
                            <a href=""><TiSocialFacebook /></a>
                        </Icons>
                    </ContactNavItem>
                </ContactNavContainer>
                <LogoContainer>
                    <LogoImage src={LogoImg} />
                    {
                        isHome ? 
                        <LogoAlt onClick={handleClick}>Logger</LogoAlt>:
                        <Logo to="/">Logger</Logo>
                    }
                </LogoContainer>
                <Nav>
                    <ul>
                        <li>
                            <HoverableLink to="/tecnicas">Técnicas</HoverableLink>
                        </li>
                        <li>
                            <HoverableLink to="/contacto">Contacto</HoverableLink>

                        </li>
                        <li>
                            <HoverableLink to="/nosotros">Nosotros</HoverableLink>
                        </li>
                    </ul>
                </Nav>
            </NavInner>
        </NavContainer>
    )
}

export default NavBar