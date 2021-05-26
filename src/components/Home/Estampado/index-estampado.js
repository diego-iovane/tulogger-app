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
} from './EstampadoElements'

const Etampado = () => {

    const tecnicas = [
        {
            img: bordadoIcon,
            title: "Bordado",
            tech: "bordado",
            properties: [
                "Ideal para ...",
                "Ideal para ..."
            ]        
        },
        {
            img: serigrafiaIcon,
            title: "Serigrafía",
            tech: "serigrafia",
            properties: [
                "Ideal para ...",
                "Ideal para ..."
            ]    
        },
        {
            img: sublimacionIcon,
            title: "Sublimado",
            tech: "sublimado",
            properties: [
                "Ideal para ...",
                "Ideal para ..."
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
            <h2>Tipo de estampado 1</h2>
            <EstampadoInner>
                {
                    tecnicas.length > 0 &&
                    tecnicas.map(item => {
                        return(
                            <EstampadoCard 
                                key={item.title}
                                onClick={() => handleClick(item.tech)}
                            >
                                <img src={item.img} alt="icono de tecnica"/>
                                <h3>{item.title}</h3>
                                {
                                    item.properties.map((item, index) => {
                                        return(<p key={index}>{item}</p>)
                                    })
                                }
                            </EstampadoCard>
                        )
                    })
                }
            </EstampadoInner>
        </EstampadoContainer>
    )
}

export default Etampado