import React from 'react'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {
    ForwardContainer,
    ForwardArrow
} from './ForwardElements'

const Forward = () => {
    return(
        <>
            <ForwardContainer>
                <ForwardArrow>
                    <IoArrowBackCircleOutline />
                </ForwardArrow>
            </ForwardContainer>
        </>
    )
}

export default Forward