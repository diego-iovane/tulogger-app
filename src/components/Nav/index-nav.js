import React from 'react'
import HoverableLink from './index-hoverable-link'
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
    LogoImage,
    Nav,
    ContactNavContainer,
    ContactNavItem,
    Icons,
} from './NavElements'

const NavBar = () => {
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
                    <Logo to="/">Logger</Logo>
                </LogoContainer>
                <Nav>
                    <ul>
                        <li>
                            <HoverableLink>Técnicas</HoverableLink>
                        </li>
                        <li>
                            <HoverableLink>Contacto</HoverableLink>

                        </li>
                        <li>
                            <HoverableLink>Nos</HoverableLink>
                        </li>
                    </ul>
                </Nav>
            </NavInner>
        </NavContainer>
    )
}

export default NavBar