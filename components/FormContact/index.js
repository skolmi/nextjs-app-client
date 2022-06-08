import {
    Input,
    Select,
    Button,
} from "@chakra-ui/react";

import { useState, useRef } from "react";

import style from './style.module.css'

import emailjs from '@emailjs/browser'


export default function FormContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [option, setOption] = useState('');

    const form = useRef();

    return (
        <div className={style.form_container}>
            <p>¡Queremos ayudarte!</p>
            <form
                ref={form}
                onSubmit={(e) => {
                    e.preventDefault();
                    // use emailjs to send email
                    emailjs.sendForm('service_g3a9b6m', 'contact_form', form.current, 'J8m3krTKjpgs-dSSU')
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        })
                }}
            >
                <Input
                    borderRadius={'10px'} 
                    h='40px' fontSize='20px' 
                    mt={8} 
                    mb={4} 
                    name='name' 
                    placeholder='Tu nombre'
                    onChange={(e) => setName(e.target.value)}
                />
                <Input 
                    borderRadius={'10px'} 
                    h='40px' 
                    fontSize='20px' 
                    mb={4} 
                    name='phone' 
                    placeholder='Telefono'
                    onChange={(e) => setPhone(e.target.value)}
                />
                <Input 
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
                <Button
                    type="submit"
                    mt={10}
                    width="100%"
                    bg='#00194A'
                    color='white'
                    fontSize='20px'
                    padding={'20px'}
                    _hover={'#00194A'}
                >
                    ¡ Listo !
                </Button>
            </form>
        </div>
    );
}