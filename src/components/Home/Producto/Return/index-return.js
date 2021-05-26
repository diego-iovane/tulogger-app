import React from 'react'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {
    ReturnContainer, 
    ReturnArrow
} from './ReturnElements'

const Return = () => {

    const handleReturn = () => {
        
    }

    return(
        <ReturnContainer>
            <ReturnArrow>
                <IoArrowBackCircleOutline onClick={handleReturn}/>
            </ReturnArrow>
        </ReturnContainer>
    )
}

export default Return