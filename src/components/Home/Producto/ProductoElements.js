import styled from 'styled-components/macro'
import {motion} from 'framer-motion'

export const productsVariants = {
    initial: {
        opacity: 0
    },
    animate: {
       opacity: 1
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .1
        }
    }
}

export const ProductsContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    top: 6vw;

    h2 {
        margin-bottom: 1rem;
        margin-top: 0;
    }
`

export const ProductsTitle = styled.h2`

`

export const ProductsInner = styled(motion.div)`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

export const ProductsListViewer = styled.div`
    width: 90%;
    overflow: hidden;
`

export const SlideImage = styled.img`
    // width: 60%;    
    max-height: 16rem;
    object-fit: contain;
`