import React from 'react'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {
    ForwardContainer,
    ForwardArrow
} from './ForwardElements'

const Forward = ({slide, setSlide}) => {

    const handleClick = () => {
        setSlide(slide * 2)
        console.log(slide)
    }


    return(
        <>
            <ForwardContainer onClick={handleClick}>
                <ForwardArrow>
                    <IoArrowBackCircleOutline />
                </ForwardArrow>
            </ForwardContainer>
        </>
    )
}

export default Forward