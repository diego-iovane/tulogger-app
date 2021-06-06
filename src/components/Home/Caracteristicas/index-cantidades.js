import React, {useEffect, useContext} from 'react'
import styled from 'styled-components'
import {Selected} from '../../../context/context'


const CantidadesContainer = styled.div``

const CantidadesInner = styled.div``

const Title = styled.h3`
    margin: 0;
`

const Selector = styled.select`
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid black;
    cursor: pointer;
`

const Cantidades = () => {

    const [selected, setSelected] = useContext(Selected)

    const handleClick = (e) => {

        setSelected({...selected, cantidad: e.target.value})
        
    }

    useEffect(() => {

        //Por default se selecciona categoria A
        setSelected({...selected, cantidad: "A"})

    }, [])

    return(
        <CantidadesContainer>
            <CantidadesInner>
                <Title>Elegí una cantidad</Title>
                <Selector onChange={handleClick}>
                    <option value="A">10-20</option>
                    <option value="B">21-50</option>
                    <option value="C">51-100</option>
                    <option value="D">101-200</option>
                </Selector>
            </CantidadesInner>
        </CantidadesContainer>
    )
}

export default Cantidades