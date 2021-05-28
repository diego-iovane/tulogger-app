import React, {useState, useContext, useEffect} from 'react'
import {Selected, StepsContext} from '../../../context/context'
import {getFirestore} from '../../../firebase/firebase'
import {handleStep} from '../utils/utils'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper'
import 'swiper/swiper.scss';
import './custom.css'
import 'swiper/components/navigation/navigation.scss'
import {
    ProductsContainer, 
    ProductsTitle,
    ProductsInner,
    ProductsListViewer,
    productsVariants,
    SlideImage
} from './ProductoElements'

SwiperCore.use([Navigation]);

const Producto = () => {

    const db = getFirestore()
    const [prendas, setPrendas] = useState([])
    const [steps, setSteps] = useContext(StepsContext)
    const [selected, setSelected] = useContext(Selected)

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
                <ProductsListViewer>
                    <Swiper
                        navigation
                        slidesPerView={4}
                        breakpoints={{
                            "320": {
                                "slidesPerView": 1,
                                "spaceBetween": 0
                            },
                            "640": {
                              "slidesPerView": 1,
                              "spaceBetween": 20
                            },
                            "768": {
                              "slidesPerView": 2,
                              "spaceBetween": 40
                            },
                            "1024": {
                              "slidesPerView": 3,
                              "spaceBetween": 50
                            }
                          }}
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
                            <div>loadingdfsahflajhlkfhklasjhkflhasldkhfklashdklfhalskdhfkalj...</div>
                        }
                    </Swiper>
                </ProductsListViewer>
            </ProductsInner>
        </ProductsContainer>
    )
}

export default Producto