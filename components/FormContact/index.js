import {
    Input,
    Select,
    Text,
    useMediaQuery
} from "@chakra-ui/react";

import { useState, useRef } from "react";

import style from './style.module.css'

import emailjs from '@emailjs/browser'

import ModalAndButton from "../ModalAndButton";


export default function FormContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [option, setOption] = useState('');
    const [isError, setIsError] = useState(false);
    const [body, setBody] = useState('')

    const form = useRef();

    const [isLargeThan362] = useMediaQuery(`(min-widhth:362px)`)

    const submitData = async () => {
        const response = await fetch('http://skolm-publi-13rm1vhreekyj-682946716.us-west-2.elb.amazonaws.com/api/zendesk/createlead', {
            method: 'POST',
            body: JSON.stringify({body}),
            headers: {
                'Content-type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className={style.form_container}>
            {isLargeThan362 ?
                <Text>¡Queremos ayudarte!</Text>
                :
                <Text fontSize='20px'>¡Queremos ayudarte!</Text>
            }
            <form
                ref={form}
                onSubmit={(e) => {
                    e.preventDefault();
                    // verifying that all form fields have values
                    if (name === '' || email === '' || phone === '' || option === '') {
                        setIsError(true);
                    } else {
                        setIsError(false);
                        // use emailjs to send email
                        // emailjs.sendForm('service_g3a9b6m', 'contact_form', form.current, 'J8m3krTKjpgs-dSSU')
                        //     .then((result) => {
                        //         console.log(result.text);
                        //     }, (error) => {
                        //         console.log(error.text);
                        //     })
                        setBody({
                            "name": name,
                            "email": email,
                            "phone": phone,
                            "option": option
                        })
                        submitData();
                        // console.log(body)
                    }
                }}
            >
                <Input
                    isInvalid={!name && isError}
                    errorBorderColor='red.300'
                    borderRadius={'10px'}
                    h='40px' fontSize='20px'
                    mt={8}
                    mb={4}
                    name='name'
                    placeholder='Tu nombre'
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    isInvalid={!phone && isError}
                    borderRadius={'10px'}
                    h='40px'
                    fontSize='20px'
                    mb={4}
                    name='phone'
                    placeholder='Telefono'
                    onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                    isInvalid={!email && isError}
                    borderRadius={'10px'}
                    h='40px'
                    fontSize='20px'
                    mb={4}
                    name='email'
                    type='email'
                    placeholder='Correo electronico'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Select
                    isInvalid={!option && isError}
                    borderRadius={'10px'}
                    h='40px'
                    fontSize='20px'
                    mb={4}
                    name='options'
                    placeholder='Programa interesado'
                    onChange={(e) => setOption(e.target.value)}
                >
                    <option>Preescolar</option>
                    <option>Primaria</option>
                    <option>Bachillerato</option>
                    <option>Adultos</option>
                </Select>
                {isError ? <span className={style.errorMessage}>Todos los campos son obligatorios</span> : null}
                <ModalAndButton isError={isError} />
            </form>
        </div>
    );
}