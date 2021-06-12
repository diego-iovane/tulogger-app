import React, {useState, useContext} from 'react'
import PopUp from './index-pop'
import {nanoid} from 'nanoid'
import {Selected} from '../../../context/context'
import {getFirestore, getFirebs} from '../../../firebase/firebase'
import {AnimatePresence} from 'framer-motion'
import {FaWhatsappSquare} from 'react-icons/fa'
import {
    // popContainerVariants,
    // popInnerVariants,
    Container,
    Text,
    PopButton,
    // PopContainer,
    // PopInner,
    InnerButton,
    // CloseButton
} from './WhatsElements'

const ContactoWhats = () => {

    // eslint-disable-next-line
    const [selected, setSelected] = useContext(Selected)
    const [isOpen, setOpen] = useState(false)
    const [loader, setLoader] = useState(false)
    const [codigoPresupuesto, setCodigoPresupuesto] = useState('')

    const closePop = () => {
            setOpen(!isOpen)
    }

    const handleWhatsContact = () => {
        
        setLoader(true)
        closePop()

        let code = {}
        code.id = nanoid(10)

        const firebs = getFirebs() 
            const db = getFirestore()
            db.collection('pedidos-presupuestos').doc(code.id).set({
                prenda: selected.producto,
                logoSize: selected.size,
                tecnica: selected.tecnica,
                ubicacion: selected.ubicacion,
                color: selected.color,
                cantidad: selected.cantidad, 
                presupuestoUnidad: selected.total,
                fecha: firebs.firestore.Timestamp.fromDate(new Date())
            })
            .then(() => {
                setLoader(false)
                setCodigoPresupuesto(code.id)
            })
            .catch(err => console.log(err))
    }

    return(
        <Container>
            <Text>
                O contactanos por Whats 
                <span>
                    <PopButton onClick={handleWhatsContact}>
                        <FaWhatsappSquare />
                    </PopButton>
                </span>
            </Text>
            <AnimatePresence>
                {
                    isOpen &&
                    <PopUp handleClose={closePop}>
                        <p>
                            {
                                loader ?
                                'Generando codigo de presupuesto...' :
                                `Contactanos con este Código de Presupuesto para que sepamos qué estás buscando: ${codigoPresupuesto}`
                            }
                        </p>
                        <InnerButton
                            href="https://wa.me/91170543029"
                            target="_blank"
                            rel="noopener noreferrer" 
                        >
                            <FaWhatsappSquare />
                        </InnerButton>
                    </PopUp>
                }
            </AnimatePresence>
        </Container>
    )
}

export default ContactoWhats