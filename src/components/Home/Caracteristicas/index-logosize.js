import React, {useContext} from 'react'
import styled from 'styled-components/macro'
import {Selected} from '../../../context/context'

const Container = styled.div`

    h3 {
        margin: 0;
    }
`

const Inner = styled.div`
    display: flex;
    justify-content: center;
`

const SmallButton = styled.button`
    font-size: 1rem;
    width: 3rem;
    height: 3rem;
    border: 2px dashed black;
    background: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3px;
`

const BigButton = styled.button`
    font-size: 2rem;
    width: 5rem;
    height: 5rem;
    border: 2px dashed black;
    background: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoSize = () => {

    const [selected, setSelected] = useContext(Selected)

    const handleClick = (e) => {
        
        setSelected({...selected, size: e.target.value})

    }

    return(
        <Container>
            <h3>Elegí el tamaño del logo</h3>
            <Inner>
                <SmallButton value="small" onClick={handleClick}>Logo</SmallButton>
                <BigButton value="big" onClick={handleClick}>Logo</BigButton>
            </Inner>
        </Container>
    )
}

export default LogoSize