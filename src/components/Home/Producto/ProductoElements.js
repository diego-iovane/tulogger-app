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
    height: 30rem;
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
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

export const ProductsListViewer = styled.div`
    width: 80%;
    overflow: hidden;
`

// export const ProductsList = styled.div`
//     position: relative;
//     height: 100%;
//     margin: 0 auto;
//     display: flex;
// `

// export const ProductCard = styled(motion.div)`
//     min-width: 21rem;
//     max-width: 21rem;

//     img {
//         height: 15rem;
//         object-fit: cover;
//     }
// `

export const SlideImage = styled.img`
    width: 80%;    
`