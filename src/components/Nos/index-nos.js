import React from 'react'
import {AnimatePresence} from 'framer-motion'
import {
    Container,
    Inner,
    ImgContainer,
    imageVariants,
    Content
} from './NosElements'

const Nos = () => {
    return(
        <Container>
            <AnimatePresence>
                <ImgContainer
                    variants={imageVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                />
            </AnimatePresence>
            <Inner>
                <Content>
                <p>
                Somos una empresa que se dedica a la confección y personalizado de prendas. 
                </p>
                <p>
                Tenemos años de experiencia en el rubro, lo cual nos permite ofrecer un producto final de calidad.
                </p>
                <p>
                Nuestra búsqueda está dirigida a ofrecer la mejor calidad al mejor precio posible. 
                </p>
                <p>
                Trabajamos con dedicación y sensibilidad, respetando plazos de demora y ofreciendo un contacto directo y constante con el cliente.
                </p>  
                </Content>
            </Inner>
        </Container>

    )
}

export default Nos