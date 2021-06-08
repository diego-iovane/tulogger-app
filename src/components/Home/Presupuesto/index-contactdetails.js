import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {getFirestore, getFirebs} from '../../../firebase/firebase'
import {
    ContactContainer,
    FormContainer,
    Form, 
    InputContainer,
    Error
} from './ContactElements'

const ContactDetails = ({selected}) =>  {

    const [loader, setLoader] = useState(false)

    const handleSendMail = (name, email) => {

        emailjs.send("service_mvvgfmc","template_n0qpfr4",{
            from_name: name,
            reply_to: email,
            prenda: selected.producto,
            logoSize: selected.size,
            tecnica: selected.tecnica,
            ubicacion: selected.ubicacion,
            color: selected.color,
            cantidad: selected.cantidad, 
            presupuesto: selected.total
            }, "user_lkXkwyOGzRwkXGfGf2L5F")
            .then(ok => {
                console.log(ok)
                setLoader(false)
            })
            .catch(err => {
                console.log(err)
                setLoader(false)
            })
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        validationSchema: Yup.object({

            name: Yup.string()
     
              .max(15, 'Must be 15 characters or less')
     
              .required('Required'),
     
            email: Yup.string().email('El e-mail no es válido').required('Required'),
     
        }),
        onSubmit: values => {

            setLoader(true)

            const firebs = getFirebs() 
            const db = getFirestore()
            db.collection('pedidos-presupuestos').add({
                nombre: values.name,
                email: values.email,
                prenda: selected.producto,
                logoSize: selected.size,
                tecnica: selected.tecnica,
                ubicacion: selected.ubicacion,
                color: selected.color,
                cantidad: selected.cantidad, 
                // presupuesto: 
                fecha: firebs.firestore.Timestamp.fromDate(new Date())
            })
            .then(() => {
                console.log('Presupuesto procesado exitosamente')
                handleSendMail(values.name, values.email)
            })
            .catch(err => console.log(err))
        }
    })

    return(
        <ContactContainer>
            <div>mail</div>
            <div>whats</div>
            <div>tel</div>
            <div>O dejanos tus detalles para que te contactemos</div>
            <FormContainer>
                <Form onSubmit={formik.handleSubmit}>
                    <InputContainer>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            placeholder="Name"
                            onChange={formik.handleChange}
                            value={formik.values.name} 
                        />
                        {
                            formik.errors.name && <Error>Ingresá tu nombre o el de tu empresa</Error>
                        }
                    </InputContainer>
                    <InputContainer>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {
                            formik.errors.email && <Error>Ingresá un e-mail para que podamos contactarte</Error>
                        }
                    </InputContainer>
                    <button type="submit">
                        {
                            loader ?
                            "..." :
                            "Enviar"
                        }
                    </button>
                </Form>
            </FormContainer>
        </ContactContainer>
    )
}

export default ContactDetails