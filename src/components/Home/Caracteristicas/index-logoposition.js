import React, {useContext} from 'react'
import styled from 'styled-components'
import {Selected} from '../../../context/context'

const Container = styled.div`

    h3 {
        margin: 0;
    }
`

const Inner = styled.div`
    display: flex;
`

const FrenteButton = styled.button`
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
`

const DorsoButton = styled.button`
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
`

const FrenteDorsoButton = styled.button`
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
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
                <FrenteButton value="frente" onClick={handleClick}>Frente</FrenteButton>
                <DorsoButton value="dorso" onClick={handleClick}>Dorso</DorsoButton>
                <FrenteDorsoButton value="ambos" onClick={handleClick}>Frente &amp; Dorso</FrenteDorsoButton>
            </Inner>
        </Container>
    )
}

export default LogoPosition