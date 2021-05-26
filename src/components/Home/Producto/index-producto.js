import React, {useState, useContext, useEffect} from 'react'
import {Selected} from '../../../context/context'
import {getFirestore} from '../../../firebase/firebase'
import Forward from './Forward/index-forward'
import Return from './Return/index-return'
import {
    ProductsContainer, 
    ProductsTitle,
    ProductsInner,
    ProductsList,
    ProductsListViewer,
    ProductCard,
    productsVariants
} from './ProductoElements'

const Producto = () => {

    const db = getFirestore()
    const [prendas, setPrendas] = useState([])
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

    console.log(slide)

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
                    <ProductsList>
                        {
                            prendas.length !== 0 ?
                            prendas.map(prenda => {
                                return(
                                    <ProductCard key={prenda.title}>
                                        <img src={prenda.img} alt={prenda.title}/>
                                        <p>{prenda.title}</p>
                                    </ProductCard>
                                )
                            }) : 
                            // LOADER
                            <div>loading...</div>
                        }
                    </ProductsList>
                </ProductsListViewer>
                <Forward slide={slide} setSlide={setSlide}/>
            </ProductsInner>
        </ProductsContainer>
    )
}

export default Producto