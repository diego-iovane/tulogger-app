import React from 'react'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {
    ReturnContainer, 
    ReturnArrow
} from './ReturnElements'

const Return = ({asRef}) => {

    return(
        <ReturnContainer ref={asRef}>
            <ReturnArrow>
                <IoArrowBackCircleOutline />
            </ReturnArrow>
        </ReturnContainer>
    )
}

export default Return