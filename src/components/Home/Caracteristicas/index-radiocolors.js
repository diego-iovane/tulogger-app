import React, {useContext} from 'react'
import styled from 'styled-components/macro'
import {Selected} from '../../../context/context'

const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;

    h3, p {
        margin: 0;
    }
`

const RadioInner = styled.div`
    display: flex;
`

const RadioLabel = styled.label`
    input {
        // display: none;
        opacity: 0;
        pointer-events: none;
        cursor: default;
        &:checked + div {
            border: 3px solid black;
        }
    }
`

const RadioButton = styled.div`
    width: 2rem;
    height: 2rem;
    padding: .2rem;
    background: ${({color}) => color};
    border: ${({color}) => color === '#ffffff' ? '1px solid black' : 'none'};
    border-radius: 50%;
    box-sizing: border-box;
    margin: .2rem;
    cursor: pointer;
`


const RadioColors = ({colors}) => {

    const [selected, setSelected] = useContext(Selected)

    const handleClick = (e) => {

        e.target.value && setSelected({...selected, color: e.target.value})
        
    }

    return(
        <RadioContainer>
            <h3>Elegí el color de la prenda*</h3>
            <RadioInner>
                {
                    colors.length !== 0 &&
                    colors.map(item => {

                        let color

                        switch(item){
                            case 'azul-marino':
                                color = "#003366"
                                break
                            case 'azul-francia':
                                color = "#281ece"
                                break
                            case 'verde-benetton':
                                color = "#0c8711"
                                break
                            case 'rojo':
                                color = "#ae350b"
                                break
                            case 'negro':
                                color = "000000"
                                break
                            case 'gris':
                                color = "#9b9b9b"
                                break
                            default:
                                color = "#ffffff"    
                        }

                        return(
                            <RadioLabel key={item} onClick={handleClick}>
                                <input 
                                    key={item}
                                    name="color" 
                                    type="radio" 
                                    value={item} 
                                    />  
                                <RadioButton color={color}/>
                            </RadioLabel>
                        )
                    })
                }
            </RadioInner>
            <p>*Consultá por otro color que necesites</p>
        </RadioContainer>    
    )
}

export default RadioColors