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
    justify-content: space-evenly;
    padding: 0 1rem;

    @media screen and (max-width: 650px) {
        padding: 0;
    }
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
    background: ${({isActive}) => isActive ? 'rgba(107, 213, 213, 0.65)' : 'transparent'};
    transition: background .5s ease-in-out; 

    &:hover {
        background: rgba(215, 53, 86, 0.57);
        background: ${({isActive}) => isActive ? 'rgba(107, 213, 213, 0.65)' : 'rgba(215, 53, 86, 0.57)'};
    }

    @media screen and (max-width: 650px) {
        width: 10vw;
        height: 10vw;
        font-size: 3.5vw;
        margin-right: 1.5px;
    }
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
    background: ${({isActive}) => isActive ? 'rgba(107, 213, 213, 0.65)' : 'transparent'};
    transition: background .5s ease-in-out; 

    &:hover {
        background: rgba(215, 53, 86, 0.57);
        background: ${({isActive}) => isActive ? 'rgba(107, 213, 213, 0.65)' : 'rgba(215, 53, 86, 0.57)'};
    }

    @media screen and (max-width: 650px) {
        width: 15vw;
        height: 15vw;
        font-size: 6.5vw;
    }
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
                <SmallButton 
                    value="small" 
                    onClick={handleClick}
                    isActive={selected.size === "small" ? true : false}
                >Logo</SmallButton>
                <BigButton 
                    value="big" 
                    onClick={handleClick}
                    isActive={selected.size === "big" ? true : false}
                >Logo</BigButton>
            </Inner>
        </Container>
    )
}

export default LogoSize