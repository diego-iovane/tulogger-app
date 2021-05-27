import React, {useState, useContext, useEffect} from 'react'
import {Selected, StepsContext} from '../../../context/context'
import {getFirestore} from '../../../firebase/firebase'
import {handleStep} from '../utils/utils'
import Forward from './Forward/index-forward'
import Return from './Return/index-return'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import {
    ProductsContainer, 
    ProductsTitle,
    ProductsInner,
    // ProductsList,
    ProductsListViewer,
    // ProductCard,
    productsVariants,
    SlideImage
} from './ProductoElements'

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Producto = () => {

    const db = getFirestore()
    const [prendas, setPrendas] = useState([])
    const [steps, setSteps] = useContext(StepsContext)
    const [selected, setSelected] = useContext(Selected)
    const [slide, setSlide] = useState(0)

    useEffect(() => {

        db.collection('prendas').get()
        .then(prendas => {
            let array = []
            prendas.forEach(prenda => {
                array.push(prenda.data())
            })
            
            setPrendas(array)
    
        })
        .catch(err => console.log(err))
    }, [])

    const handleClick = (prenda) => {
        setSelected({...selected, producto: prenda})
        handleStep(steps, setSteps)
    }

    return(
        <ProductsContainer
            variants={productsVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <ProductsTitle>Producto 2</ProductsTitle>
            <ProductsInner>
                <Return />
                <ProductsListViewer>
                    <Swiper
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        slidesPerView={4}
                        style={{'height': '20rem'}}
                    >
                        {
                            prendas.length !== 0 ?
                            prendas.map(prenda => {
                                return(
                                    <SwiperSlide 
                                        key={prenda.title}
                                        style={{
                                            'width': '15rem',
                                            'display': 'flex',
                                            'flexDirection': 'column',
                                            'justifyContent': 'space-between',
                                            'alignItems': 'center',
                                            'cursor': 'pointer'
                                        }}
                                        onClick={() => {handleClick(prenda.title)}}
                                    >
                                        <SlideImage src={prenda.img} alt={prenda.title}/>
                                        <p>{prenda.title}</p>
                                    </SwiperSlide>
                                )
                            }) : 
                            // LOADER
                            <div>loading...</div>
                        }
                    </Swiper>
                </ProductsListViewer>
                <Forward slide={slide} setSlide={setSlide}/>
            </ProductsInner>
        </ProductsContainer>
    )
}

export default Producto