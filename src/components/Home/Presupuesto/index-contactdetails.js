import React, {useState} from 'react'
import PopUp from './index-pop'
import emailjs from 'emailjs-com';
import {nanoid} from 'nanoid'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {getFirestore, getFirebs} from '../../../firebase/firebase'
import {GrSend} from 'react-icons/gr'
import {AiOutlineLoading} from 'react-icons/ai'
import {
    ContactContainer,
    FormContainer,
    Form, 
    InputContainer,
    ContactText,
    Error,
    SendButton,
    Loader
} from './ContactElements'
import { AnimatePresence } from 'framer-motion';

const ContactDetails = ({selected}) =>  {

    const [loader, setLoader] = useState(false)
    const [pop, setPop] = useState(false)

    const closePop = () => {
        setPop(false)
    }
    
    const handleSendMail = (name, email, code) => {

        emailjs.send("service_mvvgfmc","template_n0qpfr4",{
            from_name: name,
            reply_to: email,
            prenda: selected.producto,
            logoSize: selected.size,
            tecnica: selected.tecnica,
            ubicacion: selected.ubicacion,
            color: selected.color,
            cantidad: selected.cantidad, 
            presupuesto: selected.total,
            codigoPresupuesto: code
            }, "user_lkXkwyOGzRwkXGfGf2L5F")
            .then(ok => {
                console.log(ok)
                setLoader(false)
                // setPop(true)
            })
            .catch(err => {
                console.log(err)
                setLoader(false)
            })
    }

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({

            email: Yup.string().email('El e-mail no es válido').required('Required'),
     
        }),
        onSubmit: values => {

            setLoader(true)

            let code = {}
            code.id = nanoid(10)

            // FOR TEST LOADER
            // setTimeout(() => {
            //     setLoader(false)
            // }, 3000)

            const firebs = getFirebs() 
            const db = getFirestore()
            db.collection('pedidos-presupuestos').doc(code.id).set({
                email: values.email,
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
                // handleSendMail(values.name, values.email, code.id)
                setLoader(false)
                setPop(true)
            })
            .catch(err => console.log(err))
        }
    })

    return(
        <ContactContainer>
            <ContactText>Dejanos tu e-mail para que te contactemos</ContactText>
            <FormContainer>
                <Form onSubmit={formik.handleSubmit}>
                    <InputContainer>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </InputContainer>
                    <SendButton type="submit">
                        {
                            loader ?
                            <Loader><AiOutlineLoading /></Loader> :
                            <GrSend />
                        }
                    </SendButton>
                </Form>
            </FormContainer>
            <AnimatePresence>
                {
                    pop &&
                    <PopUp handleClose={closePop}>
                        <p>Gracias por contactarnos. En breve vamos a enviarte un mensaje.</p>
                    </PopUp>
                }
            </AnimatePresence>
        </ContactContainer>
    )
}

export default ContactDetails