import styled from 'styled-components/macro'
import {motion} from 'framer-motion'

export const EstampadoContainer = styled(motion.div)`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    h2 {
        margin-bottom: 0;

        @media screen and (max-width: 650px){
            margin: 0 auto;
            // font-size: 3vw;
            font-size: clamp(.3rem, .5rem + 3vw, 2rem);
            width: 80%;
            text-align: center;
        }
    }
`

export const EstampadoInner = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    @media screen and (max-width: 1050px){
        margin-top: 4vw;
    }

    @media screen and (max-width: 650px){
        flex-direction: column;
        margin-top: 2vw;
    }
`

export const EstampadoCard = styled(motion.div)`
    width: 23vw;
    height:28vw;
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 1vw;
    cursor: pointer;
    border: 1px solid #D73457;
    margin: 1vw 1vw;

    @media screen and (max-width: 1050px){
        height: 16rem;
        width: 27vw;
    }
    
    @media screen and (max-width: 650px){
        flex-direction: row;
        justify-content: space-between;
        height: 8rem;
        width: 90vw;
    }

    
    h3 {
        margin: 0;
        text-align: center;
        
        @media screen and (max-width: 1050px) {
            font-size: 1rem;
        }

        @media screen and (max-width: 650px){
            font-size: clamp(.3rem, .5rem + 3vw, 2rem);
        }
    }

    
    //Select all child elements
    &>* {
        pointer-events: none;
    }
`

export const ImgContainer = styled.div`

    img {
        width: 12vw;
    }
`

export const DetailsContainer = styled.div`
    text-align: center;

    @media screen and (max-width: 1050px){
        
    }

    @media screen and (max-width: 650px){
        max-width: 50%;    
    }

    p{
        @media screen and (max-width: 1050px) {
            font-size: .8rem;
        }

        @media screen and (max-width: 650px){
            font-size: clamp(.3rem, .1rem + 3vw, 1rem);
        }

    }
`