import React, {useContext} from 'react'
import {Selected, StepsContext} from '../../../context/context'
import {handleStep} from '../utils/utils'
import bordadoIcon from '../../../media/iconobordado.jpg'
import serigrafiaIcon from '../../../media/iconoserigrafia.png'
import sublimacionIcon from '../../../media/iconosublimacion.png'
import {
    EstampadoContainer,
    EstampadoInner,
    EstampadoCard,
    ImgContainer,
    DetailsContainer
} from './EstampadoElements'

const Etampado = () => {

    const tecnicas = [
        {
            img: bordadoIcon,
            title: "Bordado",
            tech: "bordado",
            properties: [
                "Adaptable a cualquier tipo de prenda",
                "Diseños versátiles, sencillos o complejos"
            ]        
        },
        {
            img: serigrafiaIcon,
            title: "Estampado (Serigrafía)",
            tech: "estampado",
            properties: [
                "Ideal para telas naturales",
                "Adecuado p/ diseños de pocos colores"
            ]    
        },
        {
            img: sublimacionIcon,
            title: "Sublimado",
            tech: "sublimado",
            properties: [
                "Ideal para prendas grises o blancas",
                "Ideal para diseños full color o con detalles finos"
            ]
        }
    ]

    const [steps, setSteps] = useContext(StepsContext)
    const [selected, setSelected] = useContext(Selected)

    const estampadoVariants = {
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

    const handleClick = (tecnica) => {
        setSelected({...selected, tecnica: tecnica})
        handleStep(steps, setSteps)
    }

    return(
        <EstampadoContainer
            variants={estampadoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <h2>Seleccioná el tipo de personalizado</h2>
            <EstampadoInner>
                {
                    tecnicas.length > 0 &&
                    tecnicas.map(item => {
                        return(
                            <EstampadoCard 
                                key={item.title}
                                onClick={() => handleClick(item.tech)}
                                whileHover={{ scale: 1.1 }}
                            >
                                <ImgContainer>
                                    <img src={item.img} alt="icono de tecnica"/>
                                </ImgContainer>
                                <h3>{item.title}</h3>
                                <DetailsContainer>
                                    {
                                        item.properties.map((item, index) => {
                                            return(<p key={index}>{item}</p>)
                                        })
                                    }
                                </DetailsContainer>
                            </EstampadoCard>
                        )
                    })
                }
            </EstampadoInner>
        </EstampadoContainer>
    )
}

export default Etampado