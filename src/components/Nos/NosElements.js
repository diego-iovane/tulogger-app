import styled from 'styled-components/macro'
import NosImage from '../../media/nosotros-img.png'
import {motion} from 'framer-motion'

export const Container = styled.div`
    width: 100%
`

export const Inner = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const ImgContainer = styled(motion.div)`
    width: 100%;
    height: 20rem;
    background-image: url(${NosImage});
    background-size: cover;
`

export const imageVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

export const Title = styled.h2`

`

export const Content = styled(motion.div)`

    p {
        font-weight: bold;
        font-size: clamp(.8rem, .3rem + 1vw, 2rem);
    }

`

export const contentVariants = {
    initial: {
        
    },
    animate: {
        
    },
    exit: {
        
    }
}