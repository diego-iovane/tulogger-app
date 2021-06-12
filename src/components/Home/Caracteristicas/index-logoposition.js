import React, {useContext} from 'react'
import styled from 'styled-components/macro'
import {Selected} from '../../../context/context'

const Container = styled.div`

    h3 {
        margin: 0;
        margin-bottom: 1rem;
    }
`

const Inner = styled.div`
    display: flex;

    @media screen and (max-width: 650px) {
        flex-direction: column;
    }

    button {
        @media screen and (max-width: 650px) {
            font-size: calc(.5rem + 1.5vw);
        }
    }
`

const FrenteButton = styled.button`
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    transition: all .5s ease-in-out;
    background: ${({isActive}) => isActive ? 'rgba(107, 213, 213, 0.65)' : 'transparent'};


    &:hover{
        background: ${({isActive}) => isActive ? 'rgba(107, 213, 213, 0.65)' : 'rgba(215, 53, 86, 0.57)'};
    }
`

const DorsoButton = styled.button`
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    border-left: 1px solid black;
    border-right: 1px solid black;
    transition: all .5s ease-in-out;
    background: ${({isActive}) => isActive ? 'rgba(107, 213, 213, 0.65)' : 'transparent'};


    &:hover{
        background: ${({isActive}) => isActive ? 'rgba(107, 213, 213, 0.65)' : 'rgba(215, 53, 86, 0.57)'};
    }

    @media screen and (max-width: 650px) {
        border: none;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`

const FrenteDorsoButton = styled.button`
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    transition: all .5s ease-in-out;
    background: ${({isActive}) => isActive ? 'rgba(107, 213, 213, 0.65)' : 'transparent'};


    &:hover{
        background: ${({isActive}) => isActive ? 'rgba(107, 213, 213, 0.65)' : 'rgba(215, 53, 86, 0.57)'};
    }
`

const LogoPosition = () => {

    const [selected, setSelected] = useContext(Selected)

    const handleClick = (e) => {
        
        setSelected({...selected, ubicacion: e.target.value})

    }

    return(
        <Container>
            <h3>Elegí la posición del logo</h3>
            <Inner>
                <FrenteButton
                    isActive = {selected.ubicacion === "frente" ? true : false} 
                    value="frente"
                    onClick={handleClick}>Frente</FrenteButton>
                <DorsoButton
                    isActive = {selected.ubicacion === "dorso" ? true : false} 
                    value="dorso" 
                    onClick={handleClick}>Dorso</DorsoButton>
                <FrenteDorsoButton
                    isActive = {selected.ubicacion === "ambos" ? true : false} 
                    value="ambos" 
                    onClick={handleClick}>Frente &amp; Dorso</FrenteDorsoButton>
            </Inner>
        </Container>
    )
}

export default LogoPosition